
import utils from './util.js';

const StarsDisplay =props =>(
    <div>
    {utils.range(1, props.count).map((starId) => (
      <div key={starId} className="star" />
    ))}
    </div>
  );

  export default StarsDisplay;