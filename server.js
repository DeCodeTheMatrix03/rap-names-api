const { response } = require('express')
const express = require('express')

const app = express()

const PORT = 8000

const rapper = {
    '21 savage':{ 
    'age':29,
    'birthName':'Sheyaa Bin Abraham-Joseph',
    'birthLocation': 'London, England'
},
'chance the rapper':{ 
    'age':28,
    'birthName':'Chancelor Bennett',
    'birthLocation': 'Chicago, Illinois'
},
'unknown':{ 
    'age':28,
    'birthName':'unknown',
    'birthLocation': 'unknown'
},
'j cole':{ 
    'age':37,
    'birthName':'Jermaine Lamar Cole',
    'birthLocation': 'Frankfurt, Germany'
},
'kendrick lamar':{ 
    'age':34,
    'birthName':'Kendrick Lamar Duckworth',
    'birthLocation': 'Compton, California'
}

}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})
app.get('/api/:rapperName', (request, response)=> {
    const rappersName = request.params.rapperName.toLowerCase()

    if(rapper[rappersName]){
        response.json(rappers[rappersName])
    }
    else{
        response.json(rapper['dylan'])
    }
})
app.listen(PORT, ()=>{
    console.log('The server is running')
})