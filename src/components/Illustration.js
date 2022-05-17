/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/style-prop-object */
import React from 'react'

function Illustration() {
  return (
    <>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Illustrations</h6>
        </div>
        <div className="card-body">
          <div className="text-center">
            <img
              className="img-fluid px-3 px-sm-4 mt-3 mb-4"
              style={{ width: '25rem' }}
              src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_posting_photo.svg"
              alt="..."
            />
          </div>
          <p>
            Add some quality, svg illustrations to your project courtesy of{' '}
            <a target="_blank" rel="nofollow" href="https://undraw.co/">
              unDraw
            </a>
            , a constantly updated collection of beautiful svg images that you
            can use completely free and without attribution!
          </p>
          <a target="_blank" rel="nofollow" href="https://undraw.co/">
            Browse Illustrations on unDraw &rarr;
          </a>
        </div>
      </div>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">
            Development Approach
          </h6>
        </div>
        <div className="card-body">
          <p>
            SB Admin 2 makes extensive use of Bootstrap 4 utility classes in
            order to reduce CSS bloat and poor page performance. Custom CSS
            classes are used to create custom components and custom utility
            classes.
          </p>
          <p className="mb-0">
            Before working with this theme, you should become familiar with the
            Bootstrap framework, especially the utility classes.
          </p>
        </div>
      </div>
    </>
  )
}

export default Illustration
