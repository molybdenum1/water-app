import lacnor from '../../assets/img/lacnor_image.jpg';
import oasis from '../../assets/img/oasis_image.jpg';
import blu from '../../assets/img/blu_image.jpg';
import melco from '../../assets/img/melco_image.jpg';
import safa from '../../assets/img/safa_image.jpg'; 

import './BrandsList.css'

const BrandsList = () => {
  return (
    <div className='brands-list'>
      <h2 className='brand-head'>
        Shop By Brand
      </h2>
      <div className='list'>
        <div className='brand'>
            <div className='brand-span'>
                <img src={lacnor} alt="lacnor logo" width={192} height={112} />
            </div>
            <p>Lacnor</p>
        </div>
        <div className='brand'>
            <div className='brand-span'>
                <img src={oasis} alt="lacnor logo" width={192} height={112} />
            </div>
            <p>Oasis</p>
        </div>
        <div className='brand'>
            <div className='brand-span'>
                <img src={blu} alt="lacnor logo" width={192} height={112} />
            </div>
            <p>Blu</p>
        </div>
        <div className='brand'>
            <div className='brand-span'>
                <img src={melco} alt="lacnor logo" width={192} height={112} />
            </div>
            <p>Melco</p>
        </div>
        <div className='brand'>
            <div className='brand-span'>
                <img src={safa} alt="lacnor logo" width={192} height={112} />
            </div>
            <p>Safa</p>
        </div>
      </div>
    </div>
  )
}

export default BrandsList
