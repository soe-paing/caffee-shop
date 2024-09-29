import React, { useState } from 'react';
//import './menuBook.scss'; // Assuming you have a CSS file for styling

const MenuBook = () => {
  const [currentPage, setCurrentPage] = useState('one');

  return (
    <div className="pages">
      {/* Radio Inputs */}
      <input id="one" type="radio" name="trigger" checked={currentPage === 'one'} onChange={() => setCurrentPage('one')} />
      <input id="two" type="radio" name="trigger" checked={currentPage === 'two'} onChange={() => setCurrentPage('two')} />
      <input id="three" type="radio" name="trigger" checked={currentPage === 'three'} onChange={() => setCurrentPage('three')} />
      <input id="four" type="radio" name="trigger" checked={currentPage === 'four'} onChange={() => setCurrentPage('four')} />

      {/* Pages */}
      <div className="pages_page">
        <div className="pages_page__inner">
          {/* <div className="menu_logo">Fashion</div> */}
          <div className="pagenumber">1 2</div>
          <div className="content">
            <div className="content_center">
              <h4>The latest in fashion &amp; fashion design</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="pages_page">
        <div className="pages_page__inner">
          <div className="content">
            <div className="content_center right">
                <h4>The latest in fashion &amp; fashion design</h4>
                <div className="overlay"></div>
                <div className="control next">
                    <label htmlFor="two">Next</label>
                </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pages_page">
        <div className="pages_page__inner">
          {/* <div className="menu_logo">Fashion</div> */}
          <div className="pagenumber">2 3</div>
          <div className="control">
            <label htmlFor="one">Back</label>
          </div>
          <div className="content">
            <div className="content_picture">
              <img src="https://i.pinimg.com/originals/1f/bc/f1/1fbcf1c55e839cd7b4aa28c4902669be.jpg" alt="Fashion" />
            </div>
            <div className="content_offset">
              <h2>Subtitle</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a imperdiet sapien...</p>
            </div>
            <h1>
              Look at this awesome headline right here
            </h1>
          </div>
        </div>
      </div>

      <div className="pages_page">
        <div className="pages_page__inner">
          <div className="hamburger">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="hamburger_part"></div>
            ))}
          </div>
          <div className="control next">
            <label htmlFor="three">Next</label>
          </div>
          <div className="bg"></div>
          <div className="footer">
            <i className="fab fa-google-plus-g"></i>
            <i className="fas fa-retweet"></i>
            <i className="far fa-heart"></i>
            <i className="far fa-share-square"></i>
          </div>
          <div className="content">
            <div className="content_quote">
              <h5>
                <span className="quo"><i>"</i></span>
                <span>This is a quote from someone</span>
                <span className="name">Jamie Coulter</span>
                <span className="auth">- Jcoulterdesign</span>
                <span className="quo"><i>"</i></span>
              </h5>
            </div>
            <div className="content_picture">
              <img src="https://i.pinimg.com/originals/1f/bc/f1/1fbcf1c55e839cd7b4aa28c4902669be.jpg" alt="Fashion" />
            </div>
            <h1>
              Look at this awesome headline right here
            </h1>
          </div>
        </div>
      </div>

      <div className="pages_page">
        <div className="pages_page__inner">
          {/* <div className="menu_logo">Fashion</div> */}
          <div className="pagenumber">4 5</div>
          <div className="content">
            <div className="content_center">
              <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
              <h6>Lorem ipsum dolor sit amet</h6>
            </div>
          </div>
          <div className="control">
            <label htmlFor="two">Back</label>
          </div>
        </div>
      </div>

      <div className="pages_page">
        <div className="pages_page__inner">
          <div className="hamburger">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="hamburger_part"></div>
            ))}
          </div>
          <div className="control next">
            <label htmlFor="four">Next</label>
          </div>
          <div className="bg"></div>
          <div className="content_centerimage">
            <img src="https://www.slrlounge.com/wp-content/uploads/2017/09/2brittany-smith-rachelbw6911-800x533.jpg" alt="Fashion" />
          </div>
          <div className="content_center right">
            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
            <h6>Lorem ipsum dolor sit amet</h6>
          </div>
          <div className="footer">
            <i className="fab fa-google-plus-g"></i>
            <i className="fas fa-retweet"></i>
            <i className="far fa-heart"></i>
            <i className="far fa-share-square"></i>
          </div>
        </div>
      </div>

      <div className="pages_page">
        <div className="pages_page__inner">
          <div className="menu_logo">Fashion</div>
          <div className="pagenumber">6 7</div>
          <div className="content">
            <div className="content_section">
              <h2>Super</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
            </div>
            <div className="content_section">
              <h2>Awesome</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
            </div>
            <div className="content_section">
              <h2>Great</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
            </div>
          </div>
          <div className="control">
            <label htmlFor="three">Back</label>
          </div>
        </div>
      </div>

      <div className="pages_page">
        <div className="pages_page__inner">
          <div className="hamburger">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="hamburger_part"></div>
            ))}
          </div>
          <div className="bg"></div>
          <div className="content"></div>
          <div className="footer">
            <i className="fab fa-google-plus-g"></i>
            <i className="fas fa-retweet"></i>
            <i className="far fa-heart"></i>
            <i className="far fa-share-square"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuBook;
