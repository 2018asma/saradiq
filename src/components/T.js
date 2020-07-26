import React from "react";
import CurrentEvents from "./CurrentEvents";
const T = () => {
  return (
    <section id="tabs ">
      <div class="container-fluid">
      <h2 className="heading-secondary u-margin-bottom py-5"> الفعاليات</h2>

        <div class="row">
          <div class="col-xs-12">
            <nav>
              <div class="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                <a
                  class="nav-item nav-link active"
                  id="nav-home-tab"
                  data-toggle="tab"
                  href="#nav-home"
                  role="tab"
                  aria-controls="nav-home"
                  aria-selected="true"
                >
                  الفعاليات الحالية
                </a>
                <a
                  class="nav-item nav-link"
                  id="nav-profile-tab"
                  data-toggle="tab"
                  href="#nav-profile"
                  role="tab"
                  aria-controls="nav-profile"
                  aria-selected="false"
                >
                  الفعاليات السابقة
                </a>
              </div>
            </nav>
            <div class="tab-content py-3 px-3 px-sm-0 " id="nav-tabContent">
              <div
                class="tab-pane fade show active"
                id="nav-home"
                role="tabpanel"
                aria-labelledby="nav-home-tab"
              >
                <CurrentEvents />
              </div>
              <div
                class="tab-pane fade text-center"
                id="nav-profile"
                role="tabpanel"
                aria-labelledby="nav-profile-tab"
              >
                تحت الإجراء وسيتم إكمالها في المرحلة الثانية   تحت الإجراء وسيتم
                إكمالها في المرحلة الثانية   تحت الإجراء وسيتم إكمالها في المرحلة
                الثانية    تحت الإجراء وسيتم إكمالها في المرحلة الثانية
                تحت الإجراء وسيتم إكمالها في المرحلة الثانية   تحت الإجراء وسيتم
                إكمالها في المرحلة الثانية   تحت الإجراء وسيتم إكمالها في المرحلة
                الثانية    تحت الإجراء وسيتم إكمالها في المرحلة الثانية
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default T;
