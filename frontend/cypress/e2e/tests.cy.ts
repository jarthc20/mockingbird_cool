describe('Playlist List Page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8081/'); // Adjust if the base URL is different in your environment
    });

    it('should display the search bar', () => {
        cy.get('input[placeholder="Search Playlists"]', { timeout: 10000 }).should('be.visible');
    });

    it('should display playlist names', () => {
        cy.contains('Cool').should('exist');
        cy.contains('Hello').should('exist');
    });




    describe('Home Page', () => {
        beforeEach(() => {
            cy.visit('http://localhost:8081/');
        });

        it('should display the welcome text', () => {
            cy.contains('Welcome to Mockingbird').should('be.visible');
        });


        it('should navigate to Songs screen', () => {
            cy.contains('Songs').click();

            cy.contains('Search Songs').should('exist');
        });


    });

});

