import React, { useState } from 'react';
import './menuBook.css'; // Assuming you have a CSS file for styling

const MenuBook = () => {
  return (
    <section id='menu' className='book_body'>

      <h1 className='heading'>Java Time Caffee<br/>Table Menu</h1>

      <div className='pages'>
        <input id='one' name='trigger' type='radio' />
        <input id='two' name='trigger' type='radio' />
        <input id='three' name='trigger' type='radio' />
        <input id='four' name='trigger' type='radio' />

        {/* Page 1 */}
        <div className='pages_page'>
          <div className='pages_page__inner'>
            <div className='logo'>Fashion</div>
            <div className='pagenumber'>1 2</div>
            <div className='content'>
              <div className='content_center'>
                <h4>The latest in fashion &amp; fashion design</h4>
              </div>
            </div>
          </div>
        </div>

        {/* Page 2 */}
        <div className='pages_page'>
          <div className='pages_page__inner'>
            <div className='content'>
              <div className='content_center right'>
                <h4>The latest in fashion &amp; fashion design</h4>
              </div>
              <div className='overlay'></div>
            </div>
            <div className='control next'>
              <label htmlFor='two'></label>
            </div>
          </div>
        </div>

        {/* Page 3 */}
        <div className='pages_page'>
          <div className='pages_page__inner'>
            <div className='logo'>Fashion</div>
            <div className='pagenumber'>2 3</div>
            <div className='control'>
              <label htmlFor='one'></label>
            </div>
            <div className='content'>
              <div className='content_picture'>
                <img src='https://i.pinimg.com/originals/1f/bc/f1/1fbcf1c55e839cd7b4aa28c4902669be.jpg' alt='Fashion' />
              </div>
              <div className='content_offset'>
                <h2>Subtitle</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a imperdiet sapien. Nunc vehicula lorem neque, eu rutrum sapien posuere ut. Nunc eget ullamcorper turpis. Sed in vehicula magna, vitae eleifend velit. Donec dui turpis, viverra vitae lobortis commodo, lobortis et ex.</p>
              </div>
              <h1>
                <span>L</span>
                <span>o</span>
                <span>o</span>
                <span>k</span>
                <span>&nbsp;</span>
                <span>a</span>
                <span>t</span>
                <span>&nbsp;</span>
                <span>t</span>
                <span>h</span>
                <span>i</span>
                <span>s</span>
                <span>&nbsp;</span>
                <span>a</span>
                <span>w</span>
                <span>e</span>
                <span>s</span>
                <span>o</span>
                <span>m</span>
                <span>e</span>
                <br />
                <span>h</span>
                <span>e</span>
                <span>a</span>
                <span>d</span>
                <span>l</span>
                <span>i</span>
                <span>n</span>
                <span>e</span>
                <span>&nbsp;</span>
                <span>r</span>
                <span>i</span>
                <span>g</span>
                <span>h</span>
                <span>t</span>
                <span>&nbsp;</span>
                <span>h</span>
                <span>e</span>
                <span>r</span>
                <span>e</span>
              </h1>
            </div>
          </div>
        </div>

        {/* Page 4 */}
        <div className='pages_page'>
          <div className='pages_page__inner'>
            <div className='hamburger'>
              <div className='hamburger_part'></div>
              <div className='hamburger_part'></div>
              <div className='hamburger_part'></div>
            </div>
            <div className='control next'>
              <label htmlFor='three'></label>
            </div>
            <div className='bg'></div>
            <div className='footer'>
              <i className="fab fa-google-plus-g"></i>
              <i className="fas fa-retweet"></i>
              <i className="far fa-heart"></i>
              <i className="far fa-share-square"></i>
            </div>
            <div className='content'>
              <div className='content_quote'>
                <h5>
                  <span className='quo'>
                    <i>"</i>
                  </span>
                  <span>This is a quote</span>
                  <span>from someone</span>
                  <span className='name'>Jamie Coulter</span>
                  <span className='auth'>- Jcoulterdesign</span>
                  <span className='quo'>"</span>
                </h5>
              </div>
              <div className='content_picture'>
                <img src='https://i.pinimg.com/originals/1f/bc/f1/1fbcf1c55e839cd7b4aa28c4902669be.jpg' alt='Fashion' />
              </div>
              <h1>
                <span>L</span>
                <span>o</span>
                <span>o</span>
                <span>k</span>
                <span>&nbsp;</span>
                <span>a</span>
                <span>t</span>
                <span>&nbsp;</span>
                <span>t</span>
                <span>h</span>
                <span>i</span>
                <span>s</span>
                <span>&nbsp;</span>
                <span>a</span>
                <span>w</span>
                <span>e</span>
                <span>s</span>
                <span>o</span>
                <span>m</span>
                <span>e</span>
                <br />
                <span>h</span>
                <span>e</span>
                <span>a</span>
                <span>d</span>
                <span>l</span>
                <span>i</span>
                <span>n</span>
                <span>e</span>
                <span>&nbsp;</span>
                <span>r</span>
                <span>i</span>
                <span>g</span>
                <span>h</span>
                <span>t</span>
                <span>&nbsp;</span>
                <span>h</span>
                <span>e</span>
                <span>r</span>
                <span>e</span>
              </h1>
            </div>
          </div>
        </div>

        {/* Page 5 */}
        <div className='pages_page'>
          <div className='pages_page__inner'>
            <div className='logo'>Fashion</div>
            <div className='pagenumber'>4 5</div>
            <div className='content'>
              <div className='content_center'>
                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
                <h6>Lorem ipsum dolor sit amet</h6>
              </div>
            </div>
            <div className='control'>
              <label htmlFor='two'></label>
            </div>
          </div>
        </div>

        {/* Page 6 */}
        <div className='pages_page'>
          <div className='pages_page__inner'>
            <div className='hamburger'>
              <div className='hamburger_part'></div>
              <div className='hamburger_part'></div>
              <div className='hamburger_part'></div>
            </div>
            <div className='control next'>
              <label htmlFor='four'></label>
            </div>
            <div className='bg'></div>
            <div className='content_centerimage'>
              <img src='https://www.slrlounge.com/wp-content/uploads/2017/09/2brittany-smith-rachelbw6911-800x533.jpg' alt='Fashion' />
            </div>
            <div className='content'>
              <div className='content_center right'>
                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
                <h6>Lorem ipsum dolor sit amet</h6>
              </div>
            </div>
            <div className='footer'>
              <i className="fab fa-google-plus-g"></i>
              <i className="fas fa-retweet"></i>
              <i className="far fa-heart"></i>
              <i className="far fa-share-square"></i>
            </div>
          </div>
        </div>

        {/* Page 7 */}
        <div className='pages_page'>
          <div className='pages_page__inner'>
            <div className='logo'>Fashion</div>
            <div className='pagenumber'>6 7</div>
            <div className='content'>
              <div className='content_section'>
                <h2>Super</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a imperdiet sapien. Nunc vehicula lorem neque, eu rutrum sapien posuere ut. Nunc eget ullamcorper turpis. Sed in vehicula magna, vitae eleifend velit.</p>
              </div>
              <div className='content_section'>
                <h2>Awesome</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a imperdiet sapien. Nunc vehicula lorem neque, eu rutrum sapien posuere ut. Nunc eget ullamcorper turpis. Sed in vehicula magna, vitae eleifend velit.</p>
              </div>
              <div className='content_section'>
                <h2>Great</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a imperdiet sapien. Nunc vehicula lorem neque, eu rutrum sapien posuere ut. Nunc eget ullamcorper turpis. Sed in vehicula magna.</p>
              </div>
            </div>
            <div className='control'>
              <label htmlFor='three'></label>
            </div>
          </div>
        </div>

        {/* Page 8 */}
        <div className='pages_page'>
          <div className='pages_page__inner'>
            <div className='hamburger'>
              <div className='hamburger_part'></div>
              <div className='hamburger_part'></div>
              <div className='hamburger_part'></div>
            </div>
            <div className='bg'></div>
            <div className='content'></div>
            <div className='footer'>
              <i className="fab fa-google-plus-g"></i>
              <i className="fas fa-retweet"></i>
              <i className="far fa-heart"></i>
              <i className="far fa-share-square"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default MenuBook;
