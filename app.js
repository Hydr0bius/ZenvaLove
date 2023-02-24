var users=[
    {
        name:'Lucy',
        gender:'F',
        hobby: 'pets',
        avatar: 'avatar1.png'
    },
    {
        name:'Betty',
        gender:'F',
        hobby: 'pets',
        avatar: 'avatar2.png'
    },
    {
        name:'Ronald',
        gender:'M',
        hobby: 'Music',
        avatar: 'avatar3.png'
    },
    {
        name:'Christopher',
        gender:'M',
        hobby: 'Sports',
        avatar: 'avatar4.png'
    },
    {
        name:'Ximena',
        gender:'F',
        hobby: 'reading',
        avatar: 'avatar5.png'
    },
    {
        name:'Paul',
        gender:'M',
        hobby: 'Shopping',
        avatar: 'avatar6.png'
    },
    {
        name:'Charlie',
        gender:'M',
        hobby: 'pets',
        avatar: 'avatar7.png'
    }
];


window.addEventListener('load', function(){
    console.log('se ha cargado la pagina');

    function search(){
        resultados.innerHTML='hola';
        
        //get hobby
        var hobbyField = document.getElementById('hobby');
        var hobby = hobbyField.value;
        console.log(hobby);
        
        //get gender
        var genderField = document.getElementById('gender');
        var selected = genderField.selectedIndex;
        var gender = genderField.options[selected].value;
        console.log(gender);
        
        var resultsHTML= '';
        var numUsers=users.length;

        for(var i=0; i<numUsers;i++){

            if(gender=='A'||gender==users[i].gender){
                if(hobby==''||hobby==users[i].hobby){
                    resultsHTML+=
                        '<div class="person-row"><img src="image/'+users[i].avatar+'" alt="">\
                        <div class="person-info"><div>'+users[i].name+'</div><div>'+users[i].hobby+'</div>\
                        </div><button>Add as friend</button></div>';
            }
                }
        }
        results.innerHTML=resultsHTML;
    };
    
    var resultados = document.getElementById('results');
    var busqueda = document.getElementById('searchBtn');
    busqueda.addEventListener('click',search);
    search();
});
