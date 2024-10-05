document.getElementById('search-btn').addEventListener('click', function(){
    const inputText = document.getElementById('input-text').value 
    console.log(inputText);
})


async function LoadAllPosts(){
    const response = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts')
    const data = await response.json()

    for (const post of data.posts) {
        const AllPostContainer = document.getElementById('all-post-container')

        // AllPostContainer.innerHTML = ""

        

        const div = document.createElement('div')
        div.innerHTML = `
            <div class="bg-[#797DFC1A] rounded-2xl p-4 flex space-x-5 w-full">
                        <img src="${post.image}" alt="" class="w-20 h-20 rounded-2xl">
                        <div class="space-y-5 w-full">
                            <h4 class="space-x-4 font-semibold"><span># ${post.category}</span> <span>Author : ${post.author.name}</span></h4>
                            <h2 class="font-bold text-xl">${post.title}</h2>
                            <p class="border-b-2 border-dashed border-[#0708161a] pb-3">${post.description}</p>

                            <div class="space-x-5 flex justify-between w-full">
                                <div>
                                    <i class="fa-regular fa-comment-dots"></i>
                                    <span>${post.comment_count}</span>
                                    <i class="fa-regular fa-eye"></i>
                                    <span>${post.view_count}</span>
                                    <i class="fa-regular fa-clock"></i>
                                    <span>${post.posted_time} Min Ago</span> 
                                </div>
                                <button class="bg-[#10B981] btn w-10 px-6 rounded-full text-white text-center">
                                <i class="fa-regular fa-envelope-open font-bold text-xl"></i>
                                </button>               
                            </div>
                        </div>
                    </div>
        `
        AllPostContainer.appendChild(div)
    }
}
LoadAllPosts()

async function LoadLatestPost(){
    const latestPost = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts')
    const response = await latestPost.json()
    // console.log(response);

    const latestPostContainer = document.getElementById('latest-post-container')

    for (const post of response) {
        console.log(post);
// <p>${post.author.posted_date}</p>
        const div = document.createElement('div')
        div.innerHTML = `
            <div class="rounded-3xl py-3 px-3 border border-[#12132D26] space-y-4">
                <img src="${post.cover_image}" alt="" class="w-[320px] h-[180px] rounded-2xl mx-auto">
                <div class="flex items-center space-x-2">
                    <i class="fa-regular fa-calendar"></i>                    
                    <p>${post.author.posted_date? post.author.posted_date: 'No Publish Date'}</p>
                </div>
                <h2 class="font-bold">${post.title}</h2>
                <p>${post.description}</p>
                <div class="flex items-center space-x-6">
                    <img src="${post.profile_image}" alt="" class="w-11 h-11 rounded-full">
                    <div>
                        <h3 class="font-bold">${post.author.name}</h3>
                        <p>${post.author.designation? post.author.designation: 'Unknown'}</p>
                    </div>
                </div>
            </div>
        `
        latestPostContainer.appendChild(div)
    }

    
}
LoadLatestPost()


