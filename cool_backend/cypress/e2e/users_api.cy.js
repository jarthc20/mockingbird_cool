describe('songs',  () => {
    it ("OK: GET ALL Users,", async () => {
        //Exp
        const expectedStatus = 200;
        const expectedName = "Gabriel";

        //Action
        const response = await cy.request("GET","http://localhost:3000/users/1");
        const actualStatus = response.status;
        const actualUser = response.body;

        //Assertion
        expect(actualStatus).to.equal(expectedStatus)
        expect(actualUser.name).to.equal(expectedName)
    })
});