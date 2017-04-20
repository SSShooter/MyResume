;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-pixivbtn" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M749.568 491.52c-14.336 90.112-79.872 155.648-169.984 169.984-63.488 10.24-122.88 0-184.32-20.48-16.384-6.144-22.528-14.336-20.48-32.768 2.048-47.104 0-94.208 0-143.36 0-49.152 0-98.304 0-147.456 0-10.24 2.048-20.48 12.288-26.624 81.92-40.96 165.888-57.344 251.904-18.432C716.8 311.296 761.856 405.504 749.568 491.52zM1024 512c0 282.624-229.376 512-512 512S0 794.624 0 512 229.376 0 512 0 1024 229.376 1024 512zM776.192 301.056c-53.248-59.392-124.928-83.968-202.752-88.064-133.12-8.192-247.808 40.96-348.16 122.88-55.296 45.056-55.296 45.056-16.384 100.352 4.096 6.144 6.144 16.384 16.384 12.288 8.192-4.096 8.192-12.288 8.192-20.48 0-10.24-2.048-20.48 6.144-30.72 16.384-22.528 34.816-40.96 61.44-61.44 0 145.408 0 284.672 0 423.936 0 12.288-4.096 18.432-14.336 22.528-8.192 2.048-16.384 8.192-14.336 18.432 2.048 10.24 12.288 8.192 20.48 8.192 30.72 0 61.44 0 94.208 0 8.192 0 16.384 2.048 18.432-8.192 2.048-10.24-6.144-12.288-14.336-16.384-6.144-4.096-16.384-4.096-16.384-16.384 0-30.72 0-59.392 0-88.064 4.096 0 6.144 0 6.144 0 8.192 2.048 18.432 6.144 26.624 8.192 98.304 28.672 198.656 32.768 292.864-12.288C851.968 604.16 888.832 423.936 776.192 301.056z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-bangong" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M68.154 878.325h366.111v80.632H68.154v-80.632zM952.975 958.956l-18.198-86.726c-30.389-143.42-210.653-198.318-269.904-225.795-59.27-27.463-50.565-109.814-50.565-109.814 32.39-50.554 54.433-93.316 69.415-128.26 18.693-31.74 29.87-68.314 31.312-107.454 0.471-5.544 0.405-8.39 0.405-8.39 0-126.372-102.437-228.832-228.83-228.832s-228.833 102.46-228.833 228.831c0 12.472 1.26 24.61 3.194 36.532l-0.269 0.032c0.27 1.383 0.63 2.788 0.902 4.194 0.718 4.062 1.596 8.056 2.517 12.046 0.227 0.912 0.496 1.812 0.72 2.735a227.674 227.674 0 0 0 5.827 19.603c26.181 79.077 84.284 153.7 84.284 153.7h70.181c51.87 3.048 61.475 70.16 61.475 70.16v367.438h466.367z" fill="" ></path>' +
    '' +
    '<path d="M68.154 734.927h366.111v80.63H68.154v-80.63zM68.154 591.518h366.111v80.627H68.154v-80.627z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-woderiji" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M929.28 788.48c-51.2-15.36-107.52-23.04-163.84-23.04-76.8 0-192 30.72-256 69.12V299.52c61.44-40.96 176.64-69.12 256-69.12 56.32 0 110.08 7.68 163.84 23.04v535.04z m0-627.2c-51.2-15.36-107.52-23.04-163.84-23.04-92.16 0-186.88 17.92-256 69.12-66.56-51.2-163.84-69.12-256-69.12S66.56 156.16 0 207.36v678.4c0 10.24 10.24 23.04 23.04 23.04 5.12 0 7.68-2.56 10.24-2.56 61.44-30.72 153.6-51.2 220.16-51.2 92.16 0 186.88 17.92 256 69.12 61.44-40.96 176.64-69.12 256-69.12 76.8 0 156.16 12.8 220.16 48.64 5.12 2.56 7.68 2.56 10.24 2.56 10.24 0 23.04-10.24 23.04-23.04V209.92c-25.6-23.04-56.32-35.84-89.6-48.64z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-vue" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 901.393l-445.099-778.786h342.972l21.845 37.137 80.282 140.902 80.282-141.449 16.93-37.137h347.887l-445.099 779.332zM651.264 170.667l-139.264 220.092-139.264-220.092h-78.097l217.361 389.939 217.361-389.939h-78.097zM778.513 170.667l-266.513 469.129-266.513-469.129h-87.381l353.894 630.238 353.894-630.238h-87.381z" fill="#333333" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)