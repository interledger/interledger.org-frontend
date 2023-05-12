module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [
      {
        type: 'input',
        name: 'page_name',
        message: 'What is the page name?',
      },
      {
        type: 'input',
        name: 'route',
        message: 'Enter the page route(Optional: blog/[slug] otherwise page name will be used)',
      },
    ];
    return inquirer.prompt(questions).then((answers) => {
      const { page_name, route } = answers;
      const path = route ? route : page_name.toLowerCase();
      const absPath = path;
      return { ...answers, path, absPath };
    });
  },
};
