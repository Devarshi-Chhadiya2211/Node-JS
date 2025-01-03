import React from 'react'

function Email() {
  return (
    <div>
        <div class="py-5 bg-light mx-md-3 sec-subscribe">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h2 class="h4 fw-bold">Subscribe to newsletter</h2>
                </div>
            </div>
            <form action="" class="row">
                <div class="col-md-8">
                    <div class="mb-3 mb-md-0">
                        <input type="email" class="form-control" placeholder="Enter your email"/>
                    </div>
                </div>
                <div class="col-md-4 d-grid">
                    <input type="submit" class="btn btn-primary" value="Subscribe"/>
                </div>
            </form>
        </div>
    </div>

    </div>
  )
}

export default Email
