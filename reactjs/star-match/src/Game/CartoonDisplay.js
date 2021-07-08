import logo from './../logo.svg'
import utils from './utils'

const CartoonDisplay = (props) => (
    <div>
      {utils.range(1, props.count).map((starId) => (
        <img key={starId} src={logo} width="50px" height="50px" alt="elly" />
      ))}
    </div>
  );
  export default CartoonDisplay;