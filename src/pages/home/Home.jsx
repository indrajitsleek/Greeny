import ProductCard from "../../components/ProductCard";
import CategorySlider from "./CategorySlider";
import Hero from "./Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <CategorySlider />
      <section className="section recent-part">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading">
                <h2>recently sold items</h2>
              </div>
            </div>
          </div>
          <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
            <div className="col">
              <ProductCard/>
            </div>
          </div>

        </div>
      </section>

    </>
  )
}
