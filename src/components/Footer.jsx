import React from 'react';

function Footer() {
  return (
    <footer className='footer'>
      <div className='content has-text-centered column is-6 is-offset-3'>
        <p>
          <strong>TO-DO APP</strong> by{' '}
          <a href='https://jorge-codes.com'>Jorge Palacios</a>. The source code
          is licensed{' '}
          <a href='http://opensource.org/licenses/mit-license.php'>MIT</a>. The
          website content is licensed{' '}
          <a href='http://creativecommons.org/licenses/by-nc-sa/4.0/'>
            CC BY NC SA 4.0
          </a>
          .
        </p>
      </div>
    </footer>
  );
}

export default Footer;
