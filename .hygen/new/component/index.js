module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [
      {
        type: 'input',
        name: 'componentName',
        message: 'What is the component name?',
      },
    ];

    return inquirer
      .prompt([
        {
          type: 'select',
          name: 'category',
          message: 'Component type?',
          choices: [
            'Ui',
            'Layout',
            'Paragraph',
            'Node',
            'Media',
            'Nav',
            'Util',
            'Icon',
            'Skeleton',
            'HOC',
            'Other',
          ],
        },
        {
          type: 'confirm',
          name: 'addGraphqlFragment',
          message:
            'Do you need a Graphql fragment? If the component consumes data from graphql the answer is most likely yes',
        },
      ])
      .then((answers) => {
        const { category } = answers;
        if (category === 'other') {
          return inquirer
            .prompt([
              {
                type: 'input',
                name: 'category',
                message: 'Enter component type?',
              },
              ...questions,
            ])
            .then((extraAnswers) => ({ ...answers, ...extraAnswers }));
        } else {
          return inquirer
            .prompt(questions)
            .then((extraAnswers) => ({ ...answers, ...extraAnswers }));
        }
      })
      .then((answers) => {
        const { category, componentName } = answers;
        const fullComponentName =
          category === 'Paragraph' ||
          category === 'Node' ||
          category === 'Media'
            ? `${category}${componentName}`
            : componentName;
        const path = `components/${category.toLowerCase()}/${fullComponentName}`;
        const absPath = `${path}`;
        return { ...answers, path, absPath, category, fullComponentName };
      });
  },
};
