import React from 'react'

const Create = () => {
  return (
    <>
        <div className="container">
            <div className="row">
              <div className="col-md-6">
                    <h1>Add Your Product</h1>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>
                        <input name="title" type="title" className="form-control" id="title" placeholder="Iphone Model" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Price</label>
                        <input name="price" type="text" className="form-control" id="price" placeholder="name@example.com" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Image Url</label>
                        <input name="img" type="text" className="form-control" id="img" placeholder="https://" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
                        <textarea name="desc" className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Create