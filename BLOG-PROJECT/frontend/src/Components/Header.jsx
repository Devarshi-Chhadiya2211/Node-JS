import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOffcanvasActive, setIsOffcanvasActive] = useState(false);

  useEffect(() => {
    const siteMenuClone = () => {
      const jsCloneNavs = document.querySelectorAll('.js-clone-nav');
      const siteMobileMenuBody = document.querySelector('.site-mobile-menu-body');

      // Clone navigation
      jsCloneNavs.forEach(nav => {
        const navCloned = nav.cloneNode(true);
        navCloned.setAttribute('class', 'site-nav-wrap');
        siteMobileMenuBody?.appendChild(navCloned);
      });

      // Handle dropdown menus
      setTimeout(() => {
        const hasChildrens = document.querySelector('.site-mobile-menu')?.querySelectorAll('.has-children');
        
        hasChildrens?.forEach((hasChild, counter) => {
          const refEl = hasChild.querySelector('a');
          const newElSpan = document.createElement('span');
          newElSpan.setAttribute('class', 'arrow-collapse collapsed');
          
          hasChild.insertBefore(newElSpan, refEl);
          
          const arrowCollapse = hasChild.querySelector('.arrow-collapse');
          arrowCollapse?.setAttribute('data-bs-toggle', 'collapse');
          arrowCollapse?.setAttribute('data-bs-target', `#collapseItem${counter}`);
          
          const dropdown = hasChild.querySelector('.dropdown');
          dropdown?.setAttribute('class', 'collapse');
          dropdown?.setAttribute('id', `collapseItem${counter}`);
        });
      }, 1000);
    };

    siteMenuClone();

    // Click outside handler
    const handleClickOutside = (event) => {
      const specifiedElement = document.querySelector(".site-mobile-menu");
      const menuToggle = document.querySelector(".js-menu-toggle");
      
      if (!specifiedElement?.contains(event.target) && !menuToggle?.contains(event.target)) {
        setIsOffcanvasActive(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    // Cleanup
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleMenuToggle = () => {
    setIsOffcanvasActive(!isOffcanvasActive);
  };

  useEffect(() => {
    if (isOffcanvasActive) {
      document.body.classList.add('offcanvas-menu');
    } else {
      document.body.classList.remove('offcanvas-menu');
    }
  }, [isOffcanvasActive]);

  return (
    <>

    
<div class="row">
					<div class="col-md-6 text-center order-1 order-md-2 mb-3 mb-md-0">
						<span class="logo m-0 text-uppercase">MagDesign</span>
					</div>
					<div class="col-md-3 order-3 order-md-1">
						<form class="search-form">
							<span class="icon-search2"></span>
							<input type="search" class="form-control" placeholder="Search..."/>
						</form>
					</div>
    </div>

      {/* Main Navigation */}
      <nav className="site-nav">
        <div className="container">
          <div className="menu-bg-wrap">
            <div className="site-navigation">
              {/* This menu will be cloned to mobile menu */}
              <ul className="js-clone-nav d-none d-lg-inline-block text-start site-menu">
                <li className="active"><Link to={"/"}>Home</Link></li>
                <li className="active"><Link to={"/signup"}> Registration </Link></li>
                <li className="active"><Link to={"/login"}> Login </Link></li>
                <li className="active"><Link to={"/addblog"}>Add Blog</Link></li>
                <li className="active"><Link to={"/myblog"}>My Blog</Link></li>
                </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* Header Social Icons and Toggle */}
      <div className="col-md-3 text-end order-2 order-md-3 mb-3 mb-md-0">
        <div className="d-flex">
          {/* <ul className="list-unstyled social me-auto">
           <li><i class="fa-brands fa-facebook"></i></li>
           <li><i class="fa-brands fa-instagram"></i></li>
           <li><i class="fa-brands fa-twitter"></i></li>
           
          </ul> */}

          <span 
            className={`burger ms-auto float-end site-menu-toggle js-menu-toggle d-inline-block ${isOffcanvasActive ? 'active' : ''}`}
            onClick={handleMenuToggle}
          >
            <span></span>
          </span>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="site-mobile-menu">
        <div className="site-mobile-menu-header">
          <div className="site-mobile-menu-close">
            <span className="js-menu-toggle" onClick={handleMenuToggle}>×</span>
          </div>
        </div>
        <div className="site-mobile-menu-body"></div>
      </div>
    </>
  );
};

export default Header;