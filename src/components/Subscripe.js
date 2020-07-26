import React from "react";

const Subscripe = () => {
  return (
    <section className="Subscripe py-5">
      <div className="container">
        <h2 className="heading-secondary u-margin-bottom ">اشترك معنا</h2>
        <div className="row">
          <div className="col">
            <form>
              <div class="form-group text-right">
                <input
                  type="email"
                  class="form-control form-control-lg"
                  id="exampleFormControlInput1"
                  placeholder="ادخل الايميل"
                />
              </div>
              <div className="Subscripe__form-btn">
                <button type="submit" class="btn mb-2 w-25">
                  اشترك
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Subscripe;
