const search = ( state = { propertyType: 'Residential', subTypes: [ 'Condo', 'Mobile (w/o Land)', 'Recreational', 'Single Family', 'Townhouse', 'Twin' ] }, action ) => {
  switch (action.type) {
    case 'SUB_PROP_TYPE':
      return { propertyType: action.propertyType, subTypes: subType(action.propertyType) }
    default:
      return state
  }
}

const subType = (propertyType) => {
  switch (propertyType) {
    case 'Residential':
      return [ 'Condo', 'Mobile (w/o Land)', 'Recreational', 'Single Family', 'Townhouse', 'Twin' ]
    case 'Commercial':
      return [
        'Business + R.E',
        'Business Only',
        'Hotel/Motel',
        'Industrial',
        'Investment',
        'Office',
        'Restaurant',
        'Retail',
        'Warehouse'
      ]
    case 'Farm':
      return []
    case 'Lots and Land':
      return [
        'Agricultural',
        'Commercial',
        'Industrial',
        'Multi Housing',
        'Other',
        'Recreational',
        'Residential'
      ]
    case 'Multi-Family':
      return [
        '> 4 Units',
        'Duplex',
        'Fourplex',
        'Triplex'
      ]
  }
}

export default search
