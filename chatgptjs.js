const toggleEle=document.getElementsByClassName("toggle")[0]

toggleEle.addEventListener("click", () =>{
    var bodyTag = document.getElementsByClassName('body-style')[0]
    if(bodyTag.classList.contains('primary-body-color')){
        bodyTag.classList.remove('primary-body-color')
        bodyTag.classList.add('secondary-body-color')
    } else {
        bodyTag.classList.remove('secondary-body-color')
        bodyTag.classList.add('primary-body-color')
    }






	// const html=document.querySelector('html')
    // console.log("html is",html)
	// if(html.classList.contains('dk'))
    //     {
    //         html.classList.remove('dk')
    //         // e.target.innerHTML='dark mode'

    //     }
	// else
    //     {
    //         html.classList.add('dk')
    //         // e.target.innerHTML='Light mode'
    //     }
})



// function    autoextend(textarea) {
//     // Get the current height of the textarea
//     var currentHeight = textarea.scrollHeight;

//     // Set the height of the textarea to be the same as its scroll height
//     textarea.style.height = currentHeight + 'px';
// }



function AutoExpendSeachbar(textarea){
    textarea.style.height='auto';

    textarea.style.height=textarea.scrollHeight + 'px';
}

const btn=document.getElementsByClassName('.btn')[0]
console.log('button',btn)

const ary=[]

document.getElementById('click_button').addEventListener('click', () => {
    console.log("ary value",ary)
    // let question = document.getElementById('question_id').value;
    // ary.push(`<li>${question}</li> ` )

    document.getElementById('body-response').innerHTML=ary;
    document.getElementById('question_id').value = '';



    // make api call
    // async function logMovies()
    //  {
    //     const response = await fetch('');
    //     console.log("response",response)
    //     const movies = await response.json();
    //     console.log('movies',movies)

    //     const titles=movies.title
    //     console.log('data is ',titles)

    //     const id=movies.id
    //     console.log("id",id)
        
    //     const completed=movies.completed
    //     console.log(completed)
        

        
    //    // const listVal=`<ul><li>${titles}</li><li>${id}</li><li>${completed}</li></ul>`;
    //    const listVal=`<ul> <li> ${titles} ${id} ${completed} </li>  </ul>`;
    //     console.log('listVal')

    //     const question = document.getElementById('question_id').value;
    //     //  ary.push(`<li>title ${titles} ${id} ${completed} </li> ` )
    //     ary.push(`<li>${listVal} </li> ` )
    // }
        

      
    //   logMovies()
})
