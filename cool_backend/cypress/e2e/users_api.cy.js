describe('songs',  () => {
    it ("OK: GET ALL songs,", async () => {
        //Exp
        const expectedStatus = 200;
        const expectedSize = 10;

        //Action
        const response = await cy.request("GET","http://localhost:30000/songs/all");
        const actualStatus = response.status;
        const actualSongs = response.body;

        //Assertion
        expect(actualStatus).to.equal(expectedStatus)
        expect(actualSongs.length).to.equal(expectedSize)
    })

    it ("OK: GET ALL songs byPlaylist,", async () => {
        //Exp
        const expectedStatus = 200;
        const expectedSize = 0;

        //Action
        const responsePlaylist = await cy.request("GET","http://localhost:30000/playlists/all");
        const actualStatusPlaylists = responsePlaylist.status;
        const playlists = responsePlaylist.body;

        expect(actualStatusPlaylists).to.equal(expectedStatus)

        const response = await cy.request("GET","http://localhost:30000/songs/all?byPlaylist=" + playlists[0]._id);

        cy.wait(500)

        const actualStatus = response.status;
        const actualSongs = response.body;

        //Assertion
        expect(actualStatus).to.equal(expectedStatus)
        expect(actualSongs.length).to.equal(expectedSize)
    })

    it ("OK: GET ALL songs byPlaylist,", async () => {
        //Exp
        const expectedStatus = 200;
        const expectedSize = 0;

        //Action
        const response = await cy.request("GET","http://localhost:30000/songs/all");
        const actualStatus = response.status;
        const actualSongs = response.body;
        cy.wait(500)


        const responsePlaylist = await cy.request("GET","http://localhost:30000/playlists/all");
        const actualStatusPlaylists = responsePlaylist.status;
        const playlists = responsePlaylist.body;

        cy.wait(500)

        //Assertion

        const response2 = await cy.request("POST","http://localhost:30000/songs/addToPlaylist?playlist="+playlists[0]._id,JSON.stringify(actualSongs[0]))
        cy.wait(500)
        expect(actualStatusPlaylists).to.equal(expectedStatus)
        expect(actualStatus).to.equal(expectedStatus)
        expect(response2.status).to.equal(expectedStatus)


    })

});