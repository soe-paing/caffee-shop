import React, { useState } from 'react';
import './menuBook.css'; // Assuming you have a CSS file for styling

const MenuBook = () => {
  return (
    <section id='menu' className='book_body'>

      {/* <h1 className='heading'>Java Time Caffee<br/>Table Menu</h1> */}

      <div className='pages'>
        <input id='one' name='trigger' type='radio' />
        <input id='two' name='trigger' type='radio' />
        <input id='three' name='trigger' type='radio' />
        <input id='four' name='trigger' type='radio' />

        {/* Page 1 - Cover */}
        <div className='pages_page'>
          <div className='pages_page__inner'>
            <div className='logo'>Java Time</div>
            <div className='pagenumber'>1 2</div>
            <div className='content'>
              <div className='content_center'>
                <h4>Welcome to Java Time<br/>Where Every Sip Tells a Story</h4>
              </div>
            </div>
          </div>
        </div>

        {/* Page 2 */}
        <div className='pages_page'>
          <div className='pages_page__inner'>
            <div className='content'>
              <div className='content_center right'>
                <h4>Welcome to Java Time<br/>Where Every Sip Tells a Story</h4>
              </div>
              <div className='overlay'></div>
            </div>
            <div className='control next'>
              <label htmlFor='two'></label>
            </div>
          </div>
        </div>

        {/* Page 3 - Hot Beverages */}
        <div className='pages_page'>
          <div className='pages_page__inner'>
            <div className='logo'>Hot Beverages</div>
            <div className='pagenumber'>3 4</div>
            <div className='control'>
              <label htmlFor='one'></label>
            </div>
            <div className='content'>
              <div className='content_offset'>
                <h2>Espresso Classics</h2>
                <p>Espresso $3.50<br/>
                   Americano $4.00<br/>
                   Cappuccino $4.50<br/>
                   Caffè Latte $4.50<br/>
                   Mocha $5.00</p>
                <h2>House Specials</h2>
                <p>Caramel Macchiato $5.50<br/>
                   Vietnamese Coffee $5.00<br/>
                   Turkish Coffee $5.50</p>
              </div>
              <h1>
                <span>P</span>
                <span>E</span>
                <span>R</span>
                <span>F</span>
                <span>E</span>
                <span>C</span>
                <span>T</span>
                <span>&nbsp;</span>
                <span>M</span>
                <span>O</span>
                <span>M</span>
                <span>E</span>
                <span>N</span>
                <span>T</span>
                <span>S</span>
                <span>,</span>
                <br />
                <span>&nbsp;</span>
                <span>B</span>
                <span>R</span>
                <span>E</span>
                <span>W</span>
                <span>E</span>
                <span>D</span>
                <span>&nbsp;</span>
                <span>J</span>
                <span>U</span>
                <span>S</span>
                <span>T</span>
                <span>&nbsp;</span>
                <span>F</span>
                <span>O</span>
                <span>R</span>
                <span>&nbsp;</span>
                <span>Y</span>
                <span>O</span>
                <span>U</span>
                <span>.</span>
              </h1>
            </div>
          </div>
        </div>

        {/* Page 4 - Cold Beverages */}
        <div className='pages_page'>
          <div className='pages_page__inner'>
            <div className='control next'>
              <label htmlFor='three'></label>
            </div>
            <div className='bg'></div>
            <div className='content'>
              <div className='content_quote'>
                <h5>
                  <span className='quo'><i>"</i></span>
                  <span>Life is better</span>
                  <span>with coffee</span>
                  <span className='name'>Cold Drinks</span>
                  <span className='auth'>Refreshing & Delicious</span>
                  <span className='quo'>"</span>
                </h5>
              </div>
              <div className='content_offset'>
                <h2>Iced Coffees</h2>
                <p>Iced Americano $4.50<br/>
                   Iced Latte $5.00<br/>
                   Iced Mocha $5.50<br/>
                   Cold Brew $5.00</p>
                <h2>Frappuccinos</h2>
                <p>Coffee Frappuccino $6.00<br/>
                   Mocha Frappuccino $6.50<br/>
                   Caramel Frappuccino $6.50</p>
              </div>
              <h1>
                <span>P</span>
                <span>E</span>
                <span>R</span>
                <span>F</span>
                <span>E</span>
                <span>C</span>
                <span>T</span>
                <span>&nbsp;</span>
                <span>M</span>
                <span>O</span>
                <span>M</span>
                <span>E</span>
                <span>N</span>
                <span>T</span>
                <span>S</span>
                <span>,</span>
                <br />
                <span>&nbsp;</span>
                <span>B</span>
                <span>R</span>
                <span>E</span>
                <span>W</span>
                <span>E</span>
                <span>D</span>
                <span>&nbsp;</span>
                <span>J</span>
                <span>U</span>
                <span>S</span>
                <span>T</span>
                <span>&nbsp;</span>
                <span>F</span>
                <span>O</span>
                <span>R</span>
                <span>&nbsp;</span>
                <span>Y</span>
                <span>O</span>
                <span>U</span>
                <span>.</span>
              </h1>
            </div>
          </div>
        </div>

        {/* Page 5 - Pastries */}
        <div className='pages_page'>
          <div className='pages_page__inner'>
            <div className='logo'>Fresh Pastries</div>
            <div className='pagenumber'>5 6</div>
            {/* <div className='content'>
              <div className='content_center'>
                <h4>Freshly Baked Daily</h4>
                <h6>Perfect with Your Coffee</h6>
              </div>
            </div> */}
            <div className='control'>
              <label htmlFor='two'></label>
            </div>
          </div>
        </div>

        {/* Page 6 - Pastry Menu */}
        <div className='pages_page'>
          <div className='pages_page__inner'>
            <div className='content'>
              <div className='content_section'>
                <h2>Sweet Treats</h2>
                <p>Croissant $3.50<br/>
                  Chocolate Croissant $4.00<br/>
                  Blueberry Muffin $3.50</p>
              </div>
              <div className='content_section'>
                <h2>Savory Options</h2>
                <p>Ham & Cheese Croissant $5.50<br/>
                  Spinach & Feta Danish $5.00<br/>
                  Bacon & Egg Sandwich $6.00</p>
              </div>
              <div className='content_section'>
                <h2>Sweet Extras</h2>
                <p>Cinnamon Roll $4.00<br/>
                  Apple Danish $4.50<br/>
                  Chocolate Chip Cookie $3.00</p>
              </div>
            </div>
            <div className='control next'>
              <label htmlFor='four'></label>
            </div>
          </div>
        </div>

        {/* Page 7 - Seasonal Specials */}
        <div className='pages_page'>
          <div className='pages_page__inner'>
            <div className='logo'>Seasonal Specials</div>
            <div className='pagenumber'>7 8</div>
            <div className='content'>
              <div className='content_section'>
                <h2>Fall Favorites</h2>
                <p>Pumpkin Spice Latte $5.50<br/>
                   Maple Pecan Coffee $5.50<br/>
                   Cinnamon Dolce Latte $5.50</p>
              </div>
              <div className='content_section'>
                <h2>Winter Warmers</h2>
                <p>Peppermint Mocha $5.50<br/>
                   Gingerbread Latte $5.50<br/>
                   Hot Chocolate $4.50</p>
              </div>
              <div className='content_section'>
                <h2>Summer Coolers</h2>
                <p>Iced Green Tea $4.00<br/>
                   Passion Fruit Iced Tea $4.50<br/>
                   Mango Smoothie $6.00</p>
              </div>
            </div>
            <div className='control'>
              <label htmlFor='three'></label>
            </div>
          </div>
        </div>

        {/* Page 8 - Back Cover */}
        {/* <div className='pages_page'>
          <div className='pages_page__inner'>
            <div className='content'>
              <div className='content_center right'>
                <h4>Thank You for Visiting<br/>Java Time</h4>
                <h6>Follow us @JavaTime</h6>
              </div>
            </div>
            <div className='footer'>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-facebook"></i>
              <i className="fab fa-twitter"></i>
            </div>
          </div>
        </div> */}
        <div className='pages_page'>
          <div className='pages_page__inner'>
            <div className='bg'></div>
            <div className='footer'>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-facebook"></i>
              <i className="fab fa-twitter"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default MenuBook;
