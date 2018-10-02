const initState = {
    projects: [
        {id:'1', title:'helooooooooo1', content: 'comnsssssssssssssssssssssssssssss'},
        {id:'2', title: 'hellllllllllll2', content: 'ssssssssssssssssssssssssssssssss2'},
        {id:'3', title: 'hellllllllllll3', content: 'ssssssssssssssssssssssssssssssss3'}
    ]
}

const projectReducer = (state = initState, action) => {
    switch(action.type){
        case 'CREATE_PROJECT' : 
            console.log('created project')
    }
    return state
}

export default projectReducer