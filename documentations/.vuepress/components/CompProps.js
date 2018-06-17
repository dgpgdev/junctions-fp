//////////////////////////////////////
// CLASS
/////////////////////////////////////
export default {
  name: 'CompProps',
  functional: true,
  props: {
    hello: {
      type: String,
      default: 'test'
    }
  },
  render: function (createElement, context) {
    createElement('span', { class: 'return' }, context.props.name)
  }
}

