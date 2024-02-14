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
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@03fff24f5a7ba807a292f08cfef75ed0748e40de/lib/node_modules/@stdlib/blas/sdot/docs/img/equation_dot_product.svg" alt="Dot product definition.">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/blas-sdot
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var sdot = require( '@stdlib/blas-sdot' );
```

#### sdot( x, y )

Calculates the dot product of vectors `x` and `y`.

```javascript
var Float32Array = require( '@stdlib/array-float32' );
var array = require( '@stdlib/ndarray-array' );

var x = array( new Float32Array( [ 4.0, 2.0, -3.0, 5.0, -1.0 ] ) );
var y = array( new Float32Array( [ 2.0, 6.0, -1.0, -4.0, 8.0 ] ) );

var z = sdot( x, y );
// returns -5.0
```

The function has the following parameters:

-   **x**: a 1-dimensional [`ndarray`][@stdlib/ndarray/array] whose underlying data type is `float32`.
-   **y**: a 1-dimensional [`ndarray`][@stdlib/ndarray/array] whose underlying data type is `float32`.

If provided empty vectors, the function returns `0.0`.

```javascript
var Float32Array = require( '@stdlib/array-float32' );
var array = require( '@stdlib/ndarray-array' );

var x = array( new Float32Array() );
var y = array( new Float32Array() );

var z = sdot( x, y );
// returns 0.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   `sdot()` provides a higher-level interface to the [BLAS][blas] level 1 function [`sdot`][@stdlib/blas/base/sdot].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random-base-discrete-uniform' );
var Float32Array = require( '@stdlib/array-float32' );
var array = require( '@stdlib/ndarray-array' );
var sdot = require( '@stdlib/blas-sdot' );

var x = array( new Float32Array( 10 ) );
var y = array( new Float32Array( 10 ) );

var rand1 = discreteUniform.factory( 0, 100 );
var rand2 = discreteUniform.factory( 0, 10 );

var i;
for ( i = 0; i < x.length; i++ ) {
    x.set( i, rand1() );
    y.set( i, rand2() );
}
console.log( x.toString() );
console.log( y.toString() );

var z = sdot( x, y );
console.log( z );
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

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-sdot.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-sdot

[test-image]: https://github.com/stdlib-js/blas-sdot/actions/workflows/test.yml/badge.svg?branch=v0.2.0
[test-url]: https://github.com/stdlib-js/blas-sdot/actions/workflows/test.yml?query=branch:v0.2.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-sdot/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-sdot?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-sdot.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas-sdot/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

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

[@stdlib/ndarray/array]: https://github.com/stdlib-js/ndarray-array

<!-- <related-links> -->

[@stdlib/blas/base/sdot]: https://github.com/stdlib-js/blas-base-sdot

[@stdlib/blas/ddot]: https://github.com/stdlib-js/blas-ddot

[@stdlib/blas/gdot]: https://github.com/stdlib-js/blas-gdot

<!-- </related-links> -->

</section>

<!-- /.links -->
