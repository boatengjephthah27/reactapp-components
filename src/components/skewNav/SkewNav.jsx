import React from 'react';
import './skewnav.css';
import { Helmet } from "react-helmet";


const SkewNav = () => {

  useEffect(() => {
    const open = document.getElementById('open')
    const close = document.getElementById('close')
    const container = document.querySelector('.container')
  
    open.addEventListener('click', () => container.classList.add('show-nav'))
    close.addEventListener('click', () => container.classList.remove('show-nav'))
  })

  return (
    <div>
      <div className="container">
        <div className="circle-container">
            <div className="circle">
                <button id="close">
                    <i className="fas fa-times"></i>
                </button>
                <button id="open">
                    <i className="fas fa-bars"></i>
                </button>
            </div>
        </div>

        <div className="content">
            <h1 className="text-5xl my-4">Welcome to the page</h1>
            <small>This is going to be exciting</small>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint fugiat unde ipsa? Perspiciatis, laudantium quidem quaerat eius porro dolore quibusdam ipsum autem facere expedita temporibus aut optio aliquam, velit sapiente vitae vero sit obcaecati ad unde veniam! Sunt, quae, iste quibusdam temporibus at perspiciatis veniam quis laborum aliquid quidem aliquam dicta magni et? Hic accusantium nobis obcaecati sapiente repellat qui! Animi saepe consequatur facere? Necessitatibus culpa eaque quas, voluptatem itaque natus, ut maiores sed nobis unde minima, in delectus. Magnam unde placeat voluptatum atque ex itaque nobis ducimus ab, voluptas ipsam eos porro corporis illo maxime est hic repudiandae quaerat!</p>
            
            <h3 className="text-2xl my-4">Picssy</h3>

            <img src="https://www.e-architect.com/images/jpgs/brazil/museum-oscar-niemeyer-e280513-jl1.jpg" alt=""/>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime est sed porro rerum. Omnis iusto consequuntur voluptate error molestiae sed natus mollitia nesciunt odio dolorum sequi aliquam porro veritatis ducimus ratione perspiciatis officia a quod tenetur eligendi unde exercitationem, maiores neque possimus. Veniam laboriosam laborum dolorum illo similique fugiat voluptas!</p>

        </div>
      </div>

      <nav>
          <ul>
              <li><i className="fas fa-home"></i>Home</li>
              <li><i className="fas fa-user-alt"></i>About</li>
              <li><i className="fas fa-envelope"></i>Contact</li>
          </ul>
      </nav>
    </div>
  )
};

export default SkewNav;