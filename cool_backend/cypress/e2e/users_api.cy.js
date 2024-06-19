describe('songs', () => {
    it("OK: GET ALL songs,", async () => {
        //Exp
        const expectedStatus = 200;
        const expectedSize = 10;

        //Action
        const response = await cy.request("GET", "http://localhost:30000/songs/all");
        const actualStatus = response.status;
        const actualSongs = response.body;

        //Assertion
        expect(actualStatus).to.equal(expectedStatus)
        expect(actualSongs.length).to.equal(expectedSize)
    })

    it("OK: GET ALL songs byPlaylist,", async () => {
        //Exp
        const expectedStatus = 200;
        const expectedSize = 0;

        //Action
        cy.request("GET", "http://localhost:30000/playlists/all").then(res1 => {
            expect(res1.status).to.equal(expectedStatus)

            cy.request("GET", "http://localhost:30000/songs/all?byPlaylist=" + res1.body[0]._id).then(res => {
                expect(res.status).to.equal(expectedStatus)
            });
        });


    })

    it("OK: add Song to Playlist,", async () => {
        //Exp
        const expectedStatus = 200;
        const expectedSize = 0;

        //Action
        cy.request("GET", "http://localhost:30000/songs/all").then(res1 => {
            expect(res1.status).to.equal(expectedStatus)

            cy.request("GET", "http://localhost:30000/playlists/all").then(res2 => {
                expect(res2.status).to.equal(expectedStatus)

                cy.request("POST", "http://localhost:30000/songs/addToPlaylist?playlist=" + res2.body[0]._id, JSON.stringify(res1.body[0]))
                    .then(res3 => {
                        expect(res3.status).to.equal(expectedStatus)
                })
            })

        });


        //Assertion


    })

});