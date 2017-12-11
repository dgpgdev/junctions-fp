'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _curry = require('./curry');

var _curry2 = _interopRequireDefault(_curry);

var _map = require('./map');

var _map2 = _interopRequireDefault(_map);

var _getProps = require('./getProps');

var _getProps2 = _interopRequireDefault(_getProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Récupère toute les valeur definit par property dans les objets d'une liste
 * @memberOf List
 * @function pluck
 * @param {string} property le nom de pa propriété
 * @param {array} array la liste des items a testé
 * @returns {array} un nouveau tableau contenant toute les valeurs des propriétés
 * @instance
 * @example {@lang javascript}const items = [{ name: 'dragon', attack: 10 }, { name: 'troll', attack: 5 }, { name: 'gobelin', attack: 1 }]
console.log((pluck('name', items)) // return ['dragon', 'troll', 'gobelin']
 */
var pluck = (0, _curry2.default)(function (property, array) {
  return (0, _map2.default)((0, _getProps2.default)(property))(array);
});
exports.default = pluck;