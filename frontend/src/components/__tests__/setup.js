
expect.extend({
    toBeInTheDocument(element) {
      if (!document.body.contains(element)) {
        return {
          pass: false,
          message: () => `Expected element to be in the document`,
        };
      }
      return { pass: true };
    },
  });