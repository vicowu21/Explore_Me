import * as CommonImports from '../common/CommonImports';
import CategoriesStyles from '../styles/CategoriesStyles';
import CardView from '../components/CardView';

const Image1 = require('../assets/Image3.png');
const  Image2 = require('../assets/Image4.png');
const Image3 = require('../assets/Image5.png');
const Image4 = require('../assets/Image6.png');

const CategoriesScreen = () => {
    // const categories = ['Restaurants', 'Beaches', 'Hotels', 'Cinemas'];
    const categories = [{
        name: 'Restaurants',
        image: Image1,
    },
    {
        name: 'Beaches',
        image: Image2,
    },
    {
        name: 'Hotels',
        image: Image3,
    },
    {
        name: 'Cinemas',
        image: Image4,
    }]
  return (
    <CommonImports.View style={CategoriesStyles.container}>
      <CommonImports.View
        style={{flex: 0.1, backgroundColor: 'red'}}></CommonImports.View>
      <CommonImports.View style={{flex: 0.8, alignItems: 'center'}}>
        <CommonImports.View style={CategoriesStyles.container1}>
            {categories.map((category) => (
              <CardView text={category.name} imageUrl={category.image} />
            ))}
        </CommonImports.View>
      </CommonImports.View>
    </CommonImports.View>
  );
};

export default CategoriesScreen;
