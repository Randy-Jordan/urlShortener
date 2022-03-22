const express = require('express')
const path = require('path');
const router = express.Router();
const pool = require('./db')
const crypto = require('crypto')
const urlParse = require('url-parse');
const { URL } = require('url');

const PORT = process.env.PORT
const url = process.env.URL || `https://localhost:${PORT}/`

const createParams = () => crypto.randomBytes(4).toString('base64url');

function validURL(str){ // Uses URL api, checks to see if it can parse a url. Not enterprise validation, but an attempt. 
   try {
       const parsedURL = new URL(str)
       return true
   } catch (error) {
       
       return false
   }
}
router.post("/shorten", async (req, res) => {
    let string;
    const parsedURL = new urlParse(req.body.url) // Uses library to parse protocol,host,path etc.
    
    if(parsedURL.protocol === ''){ // If none is given assume HTTPS
        string = 'https://'+ parsedURL.pathname
    }else{
        string = parsedURL.toString()
    }
    
    if(!validURL(string)){ // Check that with URL api, sends error in none can be parsed. 
        res.status(401).send('Invalid URL')
    }else{
        const params = createParams()
        
        try {
            const link = url+params
            const sql = "INSERT INTO public.links (original,url,params) VALUES ($1,$2,$3)"
            const values = [string,link,params]
            await pool.query(sql,values)
            res.status(200).json({original:string,link:url+params})
        } catch (error) {
            console.log(error)
            res.status(500).send('Server Error')
        }
    }
})

router.get("/:id", async (req, res) => {
    try {
        const params = req.params.id
        const query = "SELECT original FROM public.links WHERE params = $1"
        const result = await pool.query(query,[params]);
        if(result.rowCount === 0){
            res.status(404).send('Not Found')
        }else{
            console.log(result.rows[0])
            res.redirect(301,result.rows[0].original)
        }
    } catch (error) {
        console.log(error)
        res.status(500).send('Server Error')
    }
})


module.exports = router;