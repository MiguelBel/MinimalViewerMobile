## Minimal Viewer App

The code is related with this [post]([TODO]).

I am aware of some flaws regarding the code organization cleaness. I am not sure that I will iterate the application but if after I do it some gardenering should be done:

- **Code consistency**. There is not a convention in most parts regarding syntax. Something like ESLint will be helpful.
- **Big Components**. The components do too much, take as an example `Viewer.js`, does too much.
- **Styles**. The styles are inline. It can be extracted to some objects. Also the style is ad-hoc for iPhone 6 and 7, a better work can be done.
- **Duplication**. There is a big duplication between `HeadlineEntry.js` and `StoryEntry.js`
- **Views and Orchestrating components**. I have the feeling there are two kind of components. The ones which are mere views and the others which are orchestrating the views and contain the business logic.

I leave this as a reminder in case I will follow the project. This need to be fixed before new features will be added.

Probably there are few stuff I did not notice and can be added to the list.