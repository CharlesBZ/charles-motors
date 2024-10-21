import { Container, Row, Col } from "reactstrap"
import Helmet from "../components/Helmet/Helmet"
import CommonSection from "../components/UI/CommonSection"
import MotorcycleItem from "../components/UI/MotorcycleItem"
import motorcycleData from "../assets/data/motorcycleData"
import MotorcycleContent from "../components/MotorcycleContent/MotorcycleContent"
import { useDispatch, useSelector } from "react-redux"

export default function MotorcycleListing(props) {
  const motorcycle = useSelector((state) => state.motorcycle.motorcycleData)

  return (
    <>
      <Helmet title="Motorcycles">
        <CommonSection title="Motorcycle Listing" />

        <section>
          <Container>
            <Row>
              <Col lg="12">
                <div className=" d-flex align-items-center gap-3 mb-5">
                  <span className=" d-flex align-items-center gap-2">
                    <i class="ri-sort-asc"></i> Sort By
                  </span>

                  <select>
                    <option>Select</option>
                    <option value="low">Low to High</option>
                    <option value="high">High to Low</option>
                  </select>
                </div>
              </Col>

              {motorcycleData.map((item) => (
                <MotorcycleItem item={item} key={item.id} />
              ))}
            </Row>
          </Container>
        </section>
        <MotorcycleContent />
      </Helmet>
    </>
  )
}
