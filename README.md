# <img alt="React Native typography" src="https://raw.githubusercontent.com/hectahertz/react-native-typography/HEAD/images/logo.png" width="275"/>

Pixel–perfect, native–looking typographic styles for React Native.

[![npm version](https://img.shields.io/npm/v/react-native-typography.svg)](https://www.npmjs.com/package/react-native-typography)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![npm downloads](https://img.shields.io/npm/dm/react-native-typography.svg)](https://www.npmjs.com/package/react-native-typography)

<p align="center">
<img alt="React Native Typography Human Showcase" src="https://raw.githubusercontent.com/hectahertz/react-native-typography/HEAD/images/showcase-human-ios.png" width="49.7%"/>
<img alt="React Native Typography Material Showcase" src="https://raw.githubusercontent.com/hectahertz/react-native-typography/HEAD/images/showcase-material-android.png" width="49.7%"/>
</p>

## Why

Creating great Text Styles in React Native
[is not a simple task](https://medium.com/@martin_adamko/react-native-quirks-2fb1ae0bbf80),
it requires a lot of fiddling and handling edge cases.

This library provides a good set of defaults and helpers that cover the majority
of the cases you'll need, make your code much simpler and ✨*bonus*✨ render
great [on iOS, Android and the web](#cross-platform) 😄

## Quick start

Add the dependency:

```sh
yarn add react-native-typography
```

Set a style in your component:

```JSX
import { material } from 'react-native-typography'

<Text style={material.display1}>Hello Typography!</Text>
```

And it will look like this:

<p align="center">
<img alt="Material Design Collection" src="https://raw.githubusercontent.com/hectahertz/react-native-typography/HEAD/images/hello-world.png" width="40%" height="40%"/>
</p>

### Example app

* You can run the example app
  [via Expo](https://expo.io/@hectahertz/react-native-typography-example) or
  [check the code](example/App.js), all of the screenshots are taken directly
  from there!

## Typography collections

We provide a series of predefined collections for you to start with that match
the native design systems for iOS and Android.

You can **use them directly** wherever you would supply a
[textStyle](https://facebook.github.io/react-native/docs/textstyleproptypes.html).

There's also the option of [extending them](#customization-helpers) to create
your own styles.

### Material Design

Includes all the styles defined in the
[Material Design Guidelines](https://material.io/guidelines/style/typography.html#typography-styles).
Defines size, weight and color.

```JSX
import { material } from 'react-native-typography'

<Text style={material.display4}>Hello Material!</Text>
```

<img alt="Material Design Collection" src="https://raw.githubusercontent.com/hectahertz/react-native-typography/HEAD/images/material-collection-android.png" width="80%" height="80%"/>

### Human Interface Guidelines

Defined in the
[Human Interface Guidelines](https://developer.apple.com/ios/human-interface-guidelines/visual-design/typography/).
Defines size, weight and color.

```JSX
import { human } from 'react-native-typography'

<Text style={human.largeTitle}>Hello Human!</Text>
```

<img alt="Human Interface Collection" src="https://raw.githubusercontent.com/hectahertz/react-native-typography/HEAD/images/human-collection-ios.png" width="80%" height="80%"/>

### iOSUIKit

Extracted from
[the official Apple sketch file](https://developer.apple.com/design/resources/)

These are the text styles that fall under the category of iOS UIKit, and are
used to build the UI components of iOS Apps.

They build on top of the Human Interface styles, customizing some properties
such as weight or letter spacing.

```JSX
import { iOSUIKit } from 'react-native-typography'

<Text style={iOSUIKit.largeTitleEmphasized}>Hello iOS UI Kit!</Text>
```

<img alt="iOSUIKit Collection" src="https://raw.githubusercontent.com/hectahertz/react-native-typography/HEAD/images/iosuikit-collection-ios.png" width="80%" height="80%"/>

## Customization & Helpers

The collections provide every style in 2 different ways:

* As a StyleSheet, e.g.: `material.title`
* As a plain object, e.g.: `material.titleObject`

The basic way to use them is to set the StyleSheet directly where you would
supply a
[textStyle](https://facebook.github.io/react-native/docs/textstyleproptypes.html):

```JSX
<Text style={material.title}>Title</Text>
```

To extend the styles, you can **spread the object** inside your own StyleSheet
and override some of its attributes:

```JSX
const styles = StyleSheet.create({
  yellowTitle: {
    ...material.titleObject,
    color: iOSColors.yellow,
  },
});

<Text style={styles.yellowTitle}>Title</Text>
```

Another option would be to **combine the provided StyleSheet** with your own
StyleSheet.

```JSX
const styles = StyleSheet.create({
  yellow: {
    color: iOSColors.yellow,
  },
});

<Text style={[material.title, styles.yellow]}>Title</Text>
```

### Weights

A font weight in React Native is sometimes formed by a pair of a fontFamily and
a fontWeight, but not always! It depends on the typeface, sometimes it's just
defined by the fontFamily.

With these helpers, you don't have to worry about those inconsistencies.

To combine them with a collection style (or your own styles) just spread them,
as they are plain objects.

```JSX
const styles = StyleSheet.create({
  lightTitle: {
    ...material.titleObject,
    ...systemWeights.light,
  },
});

<Text style={styles.lightTitle}>Title</Text>
```

#### System Weights

```JSX
import { systemWeights } from 'react-native-typography'
```

The System weights render visually similar weights of the **Native
typefaces** on each platform.
[Read more about cross-platform here.](#cross-platform)

This is the recommended way of customizing your weights unless you really need
different visual styles for each platform.

They follow the San Francisco naming convention, as it has more steps, which
makes it more future–proof.

<img alt="System Weights iOS" src="https://raw.githubusercontent.com/hectahertz/react-native-typography/HEAD/images/system-weights-ios.png" width="80%" height="80%"/>

<img alt="System Weights Android" src="https://raw.githubusercontent.com/hectahertz/react-native-typography/HEAD/images/system-weights-android.png" width="80%" height="80%"/>

<img alt="System Weights Web" src="https://raw.githubusercontent.com/hectahertz/react-native-typography/HEAD/images/system-weights-web.png" width="80%" height="80%"/>

#### San Francisco Weights

```JSX
import { sanFranciscoWeights } from 'react-native-typography'
```

These weights are **only intended for iOS**, as they directly reference the
native San Francisco typeface.

<img alt="San Francisco Weights" src="https://raw.githubusercontent.com/hectahertz/react-native-typography/HEAD/images/san-francisco-weights.png" width="80%" height="50%"/>

#### Roboto Weights

```JSX
import { robotoWeights } from 'react-native-typography'
```

These weights are **only intended for Android**, as they directly reference the
native Roboto typeface.

<img alt="Roboto Weights" src="https://raw.githubusercontent.com/hectahertz/react-native-typography/HEAD/images/roboto-weights.png" width="80%" height="80%"/>

#### Web Weights

```JSX
import { webWeights } from 'react-native-typography'
```

These weights are **only intended for the web**, and render [react-native-web](https://github.com/necolas/react-native-web)'s system font stack.

<img alt="Web Weights" src="https://raw.githubusercontent.com/hectahertz/react-native-typography/HEAD/images/web-weights.png" width="80%" height="80%"/>

### Colors

We also include the default text color hex values for each platform.

#### iOS

```JSX
import { iOSColors } from 'react-native-typography'
```

<img alt="Colors iOS" src="https://raw.githubusercontent.com/hectahertz/react-native-typography/HEAD/images/ios-colors.png" width="50%" height="50%"/>

```JSX
const styles = StyleSheet.create({
  yellowTitle: {
    ...human.title3Object,
    color: iOSColors.yellow,
  },
});

<Text style={styles.yellowTitle}>Title</Text>
```

#### Material

```JSX
import { materialColors } from 'react-native-typography'
```

<img alt="Colors Material" src="https://raw.githubusercontent.com/hectahertz/react-native-typography/HEAD/images/material-colors.png" width="50%" height="50%"/>

```JSX
const styles = StyleSheet.create({
  tertiaryTitle: {
    ...material.titleObject,
    color: materialColors.blackTertiary,
  },
});

<Text style={styles.tertiaryTitle}>Title</Text>
```

### Spacing/Kerning

#### San Francisco

The San Francisco typeface defines its letter spacing via Kerning. This
is not compatible with the React Native text style properties, as they take
letter-spacing instead.

To perform this conversion on iOS you can use the `sanFranciscoSpacing` function, which
receives the font size and returns the appropriate letter spacing.

This is not needed for the web as the browsers already take care of this.

```JSX
import { sanFranciscoSpacing } from 'react-native-typography'

const styles = StyleSheet.create({
  customSize: {
    ..., // some other props
    fontSize: 34,
    letterSpacing: sanFranciscoSpacing(34),
  },
});
```

This is already taken care of on the collections, but if you want to define your
own sizes you can adjust the spacing on iOS with this helper.

## Dense and tall scripts

Dense and tall scripts are fully supported, check [the full documentation here!](DENSE_TALL.md)

```JSX
import { materialDense } from 'react-native-typography'

<Text style={materialDense.display4}>你好排版！</Text>
```

<p align="center">
<img alt="Material Design Collection" src="https://raw.githubusercontent.com/hectahertz/react-native-typography/HEAD/images/hello-world-chinese.png" width="190" height="70"/>
</p>

## Cross-platform

Quoting
[the Material Design Platform recommendations](https://material.io/guidelines/platforms/platform-adaptation.html#platform-adaptation-platform-recommendations)

> The default typeface on iOS is San Francisco. Using this typeface is the
> easiest way to implement accessibility features like Dynamic Type. Using other
> typefaces may require making adjustments to get the same accessibility
> features.

This is the approach that we like to follow, and all the collections exported
from this library render nicely on all the supported platforms with their respective native
typefaces, for that we use the [System](#system-weights) weight helper.

You can [check the code of the example app](example/App.js) where we included a
couple of screens that follow this philosophy, this is how they render on iOS and Android:

<p align="center">
<img alt="React Native Typography Human Showcase on iOS" src="https://raw.githubusercontent.com/hectahertz/react-native-typography/HEAD/images/showcase-human-ios.png" width="49.7%"/>
<img alt="React Native Typography Human Showcase on Android" src="https://raw.githubusercontent.com/hectahertz/react-native-typography/HEAD/images/showcase-human-android.png" width="49.7%"/>
</p>

<p align="center">
<img alt="React Native Typography Human Showcase on iOS" src="https://raw.githubusercontent.com/hectahertz/react-native-typography/HEAD/images/showcase-material-ios.png" width="49.7%"/>
<img alt="React Native Typography Material Showcase on Android" src="https://raw.githubusercontent.com/hectahertz/react-native-typography/HEAD/images/showcase-material-android.png" width="49.7%"/>
</p>

## F.A.Q.

#### But I don't wanna use the Material Design or Human Interface Guidelines! Is there any reason why I should use this library?

Absolutely! The helpers are very convenient to build your own text styles as
they work around
[the quirks of working with text styles on React Native](https://medium.com/@martin_adamko/react-native-quirks-2fb1ae0bbf80),
even if you want to specify your own sizes and weights,
[check them out!](#customization--helpers)

#### Kerning is not 100% accurate on the Display sizes for the Material styles on Android

There's no support for letter spacing on React Native Android yet. ☹️

#### Where is Roboto Black?

It's not available by default on React Native Android yet. 😐

#### Why are there less weights available for CJK(Chinese, Japanese, Korean) languages on Android than iOS?

Android uses Noto Sans CJK (also known as Source Han Sans) to render those
languages, and
[even though it has seven weights](https://material.io/guidelines/style/typography.html#typography-typeface),
they're not shipped with Android. 😕

There are some issues tracking this already, hopefully they will be included in
the future.

* https://issuetracker.google.com/issues/37064674
* https://issuetracker.google.com/issues/37106325

#### I use styled-components/glamorous/etc. Can I use react-native-typography?

Of course! There are some examples in the provided app,
[check the code!](example/screens/type/IntegrationsScreen.js)

#### Why is this library exporting StyleSheets and objects instead of components?

The idea behind it is that textStyles are the universally accepted way of
styling text and this makes integration
[with many libraries](https://reactnavigation.org/docs/navigators/stack#headerTitleStyle)
easier.

The StyleSheet/Object pattern is
[already being used](https://facebook.github.io/react-native/docs/stylesheet.html#absolutefill)
in the React Native codebase to provide an easy way to extend exported
StyleSheets.

If you enjoy using pre-styled components for your text, you can easily
define them and just supply the desired styles from this library! 🙂

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available,
see the
[tags in this repository](https://github.com/hectahertz/react-native-typography/tags).

## Authors

* **[Hector Garcia](https://github.com/hectahertz)**

See also the list of
[contributors](https://github.com/hectahertz/react-native-typography/contributors)
who participated in this project.

## License

This project is licensed under the MIT License.

## Acknowledgments

* [Kyle Hickinson](https://github.com/kylehickinson) - thanks for
  [the work on the kerning values for San Francisco](https://github.com/kylehickinson/Sketch-SF-UI-Font-Fixer)
  and for being so nice!
* [Bartol Karuza](https://github.com/bartolkaruza) &
  [Chris Lewis](https://github.com/cdlewis) - thanks for the work on fixing the
  line heights inconsistencies in React Native.
* [Alina Cvetkova](https://twitter.com/nuacco) - thanks for your help with the
  UX and visual fine–tuning.

### Pictures for the demo app by:

* [Sasha Freemind](https://unsplash.com/@sashafreemind)
* [Seth Doyle](https://unsplash.com/@sethdoylee)
* [Angel Jimenez](https://unsplash.com/@particularangelvision)
* [Efe Kurnaz](https://unsplash.com/@efekurnaz)
* [Mário Silva](https://unsplash.com/@mariosilva)
* [Paul Morris](https://unsplash.com/@oldskool2016)
* [Joel Filipe](https://unsplash.com/@joelfilip)
* [Wild Vibez](https://unsplash.com/@wldvbz)

## References

* https://developer.apple.com/ios/human-interface-guidelines/visual-design/typography/
* https://material.io/guidelines/style/typography.html
* https://developer.apple.com/design/resources/
* https://facebook.github.io/react-native/docs/text.html#style
* https://medium.com/@knoland/typography-in-react-native-f09c43b5b435
* https://developer.apple.com/videos/play/wwdc2015/804/
* https://developer.apple.com/videos/play/wwdc2016/801/
* https://medium.com/react-native-training/list-of-available-react-native-fonts-ed78b48bd45e
* https://developer.apple.com/documentation/uikit/uifontdescriptor/font_weights
* https://v1.designcode.io/iosdesign-guidelines
* http://devsign.co/notes/tracking-and-character-spacing
* https://www.raizlabs.com/dev/2015/08/advanced-ios-typography/
* https://medium.com/@sauvik_dolui/handling-fonts-in-ios-development-a-simpler-way-32d360cdc1b6
* https://readymag.com/arzamas/132908/6/
* https://github.com/facebook/react-native/pull/14609
* https://github.com/react-native-training/react-native-fonts
