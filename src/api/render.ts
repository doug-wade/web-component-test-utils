import generateRandomElementName from '../util/generate-random-element-name';

export default (component, { attributes, slot }) => {
    const elementName = generateRandomElementName();
    console.log(elementName);
    console.log(component);
};