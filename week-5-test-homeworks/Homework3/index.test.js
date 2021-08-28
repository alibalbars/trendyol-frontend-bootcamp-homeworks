import { getPostTitlesOfMostPoster, getPosts } from "./index";
import axios from "axios";
jest.mock("axios");

describe("get post titles of user the user with the most posts", () => {
    describe("getPosts function tests", () => {
        it("should return posts", async () => {
            axios.get.mockImplementation(() => {
                return Promise.resolve({
                    data: {
                        userId: 1,
                        id: 1,
                        title: "title1",
                        body: "body1",
                    },
                });
            });

            const result = await getPosts();
            expect(result).toEqual({
                userId: 1,
                id: 1,
                title: "title1",
                body: "body1",
            });
        });
    });

    describe("getPostTitles function tests", () => {
        it("should return post titles of most poster user", async () => {
            axios.get.mockImplementation(() => {
                return Promise.resolve({
                    data: [
                        { userId: 1, id: 1, title: "title1", body: "body1" },
                        { userId: 2, id: 2, title: "title2", body: "body2" },
                        { userId: 3, id: 3, title: "title3", body: "body3" },
                        { userId: 3, id: 3, title: "title3", body: "body3" },
                    ],
                });
            });
            const result = await getPostTitlesOfMostPoster();

            expect(result).toEqual(['title3', 'title3']);
        });
    });
});
