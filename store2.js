/**
 * Register store2 as instance method this.$store...
 *
 * @param Vue
 */

import store2 from 'store2';

export default function install(Vue) {
    /* eslint-disable no-param-reassign */
    Vue.prototype.$store = store2;
    /* eslint-enable no-param-reassign */
}
