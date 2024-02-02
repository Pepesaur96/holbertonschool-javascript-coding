// A class AppController that will be used by the server to render a home page.

class AppController {
    static getHomepage(request, response) {
        response.status(200).send('Hello Holberton School!');
    }
}

module.exports = AppController;
