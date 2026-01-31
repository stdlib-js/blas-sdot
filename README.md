<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# sdot

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Calculate the dot product of two single-precision floating-point vectors.

<section class="intro">

The [dot product][dot-product] (or scalar product) is defined as

<!-- <equation class="equation" label="eq:dot_product" align="center" raw="\mathbf{x}\cdot\mathbf{y} = \sum_{i=0}^{N-1} x_i y_i = x_0 y_0 + x_1 y_1 + \ldots + x_{N-1} y_{N-1}" alt="Dot product definition."> -->

```math
\mathbf{x}\cdot\mathbf{y} = \sum_{i=0}^{N-1} x_i y_i = x_0 y_0 + x_1 y_1 + \ldots + x_{N-1} y_{N-1}
```

<!-- <div class="equation" align="center" data-raw-text="\mathbf{x}\cdot\mathbf{y} = \sum_{i=0}^{N-1} x_i y_i = x_0 y_0 + x_1 y_1 + \ldots + x_{N-1} y_{N-1}" data-equation="eq:dot_product">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@d0afc603cdda35b11d5bd1633dd4dddb0d59e117/lib/node_modules/@stdlib/blas/sdot/docs/img/equation_dot_product.svg" alt="Dot product definition.">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->



<section class="usage">

## Usage

To use in Observable,

```javascript
sdot = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-sdot@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var sdot = require( 'path/to/vendor/umd/blas-sdot/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/blas-sdot@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.sdot;
})();
</script>
```

#### sdot( x, y\[, dim] )

Calculates the dot product of two single-precision floating-point vectors `x` and `y`.

```javascript
var Float32Array = require( '@stdlib/array-float32' );
var array = require( '@stdlib/ndarray-array' );

var x = array( new Float32Array( [ 4.0, 2.0, -3.0, 5.0, -1.0 ] ) );
var y = array( new Float32Array( [ 2.0, 6.0, -1.0, -4.0, 8.0 ] ) );

var z = sdot( x, y );
// returns <ndarray>

var v = z.get();
// returns -5.0
```

The function has the following parameters:

-   **x**: a non-zero-dimensional [`ndarray`][@stdlib/ndarray/ctor] whose underlying data type is `float32`. Must be [broadcast-compatible][@stdlib/ndarray/base/broadcast-shapes] with `y`.
-   **y**: a non-zero-dimensional [`ndarray`][@stdlib/ndarray/ctor] whose underlying data type is `float32`. Must be [broadcast-compatible][@stdlib/ndarray/base/broadcast-shapes] with `x`.
-   **dim**: dimension for which to compute the dot product. Must be a negative integer. Negative indices are resolved relative to the last array dimension, with the last dimension corresponding to `-1`. Default: `-1`.

If provided at least one input [`ndarray`][@stdlib/ndarray/ctor] having more than one dimension, the input [`ndarrays`][@stdlib/ndarray/ctor] are [broadcasted][@stdlib/ndarray/base/broadcast-shapes] to a common shape. For multi-dimensional input [`ndarrays`][@stdlib/ndarray/ctor], the function performs batched computation, such that the function computes the dot product for each pair of vectors in `x` and `y` according to the specified dimension index.

```javascript
var Float32Array = require( '@stdlib/array-float32' );
var array = require( '@stdlib/ndarray-array' );

var opts = {
    'shape': [ 2, 3 ]
};
var x = array( new Float32Array( [ 4.0, 2.0, -3.0, 5.0, -1.0, 3.0 ] ), opts );
var y = array( new Float32Array( [ 2.0, 6.0, -1.0, -4.0, 8.0, 2.0 ] ), opts );

var z = sdot( x, y );
// returns <ndarray>

var v1 = z.get( 0 );
// returns 23.0

var v2 = z.get( 1 );
// returns -22.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The size of the contracted dimension must be the same for both input [`ndarrays`][@stdlib/ndarray/ctor].
-   The function resolves the dimension index for which to compute the dot product **before** broadcasting.
-   Negative indices are resolved relative to the last [`ndarray`][@stdlib/ndarray/ctor] dimension, with the last dimension corresponding to `-1`.
-   The output [`ndarray`][@stdlib/ndarray/ctor] has the same data type as the input [`ndarrays`][@stdlib/ndarray/ctor] and has a shape which is determined by broadcasting and excludes the contracted dimension.
-   If provided empty vectors, the dot product is `0`.
-   `sdot()` provides a higher-level interface to the [BLAS][blas] level 1 function [`sdot`][@stdlib/blas/base/sdot].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-array-discrete-uniform@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-to-array@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-array@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/blas-sdot@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var opts = {
    'dtype': 'float32'
};

var x = array( discreteUniform( 10, 0, 100, opts ), {
    'shape': [ 5, 2 ]
});
console.log( ndarray2array( x ) );

var y = array( discreteUniform( 10, 0, 10, opts ), {
    'shape': x.shape
});
console.log( ndarray2array( y ) );

var z = sdot( x, y, -1 );
console.log( ndarray2array( z ) );

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/blas-base/sdot`][@stdlib/blas/base/sdot]</span><span class="delimiter">: </span><span class="description">calculate the dot product of two single-precision floating-point vectors.</span>
-   <span class="package-name">[`@stdlib/blas-ddot`][@stdlib/blas/ddot]</span><span class="delimiter">: </span><span class="description">calculate the dot product of two double-precision floating-point vectors.</span>
-   <span class="package-name">[`@stdlib/blas-gdot`][@stdlib/blas/gdot]</span><span class="delimiter">: </span><span class="description">calculate the dot product of two vectors.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-sdot.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-sdot

[test-image]: https://github.com/stdlib-js/blas-sdot/actions/workflows/test.yml/badge.svg?branch=v0.3.0
[test-url]: https://github.com/stdlib-js/blas-sdot/actions/workflows/test.yml?query=branch:v0.3.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-sdot/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-sdot?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-sdot.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas-sdot/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/blas-sdot/tree/deno
[deno-readme]: https://github.com/stdlib-js/blas-sdot/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/blas-sdot/tree/umd
[umd-readme]: https://github.com/stdlib-js/blas-sdot/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/blas-sdot/tree/esm
[esm-readme]: https://github.com/stdlib-js/blas-sdot/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/blas-sdot/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/blas-sdot/main/LICENSE

[dot-product]: https://en.wikipedia.org/wiki/Dot_product

[blas]: http://www.netlib.org/blas

[@stdlib/ndarray/ctor]: https://github.com/stdlib-js/ndarray-ctor/tree/umd

[@stdlib/ndarray/base/broadcast-shapes]: https://github.com/stdlib-js/ndarray-base-broadcast-shapes/tree/umd

[@stdlib/blas/base/sdot]: https://github.com/stdlib-js/blas-base-sdot/tree/umd

<!-- <related-links> -->

[@stdlib/blas/ddot]: https://github.com/stdlib-js/blas-ddot/tree/umd

[@stdlib/blas/gdot]: https://github.com/stdlib-js/blas-gdot/tree/umd

<!-- </related-links> -->

</section>

<!-- /.links -->
