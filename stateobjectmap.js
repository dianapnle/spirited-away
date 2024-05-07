const stateobj = {
    spots : {
        byId : {
            spot1 : {
                id : spot1.id,
                ownerId : spot1.ownerId,
                address: spot1.address,
                city: spot1.city,
                state: spot1.state,
                country: spot1.country,
                lat: spot1.lat,
                lng: spot1.lng,
                name: spot1.name,
                description: spot1.description,
                price: spot1.price,
                createdAt: spot1.createdAt,
                updatedAt: spot1.updatedAt,
                avgRating: spot1.avgRating,
                previewImage: spot1.previewImage,
                reviews : [review1.id],
                spotImages: [spotImage1.id, spotImage2.id]
            },
            spot2 : {
                id : spot2.id,
                ownerId : spot2.user,
                address: spot2.address,
                city: spot2.city,
                state: spot2.state,
                country: spot2.country,
                lat: spot2.lat,
                lng: spot2.lng,
                name: spot2.name,
                description: spot2.description,
                price: spot2.price,
                createdAt: spot2.createdAt,
                updatedAt: spot2.updatedAt,
                avgRating: spot2.avgRating,
                previewImage: spot2.previewImage,
                reviews : [review2.id],
                spotImages: [spotImage3.id]
            }
        },
        allIds : [spot1.id, spot2.id]
    },

    users: {
        byId : {
            user1 : {
                id : user1.id,
                firstName: user1.firstName,
                lastName: user1.lastName,
                email: user1.email,
                username: user1.username,
                spots : [spot1.id],
                reviews: [review1.id]
            },
            user2 : {
                id : user2.id,
                firstName: user2.firstName,
                lastName: user2.lastName,
                email: user2.email,
                username: user2.username,
                spots : [spot2.id],
                reviews: [review2.id]
            }
        },
        allIds : [user1.id, user2.id]
    },
    reviews: {
        byId : {
            review1 : {
                id : review1.id,
                userId: user1.id,
                spotId: spot2.id,
                review: review1,
                stars: stars1,
                createdAt: createdAt1,
                updatedAt: updatedAt1,
                reviewImages: [reviewImage1.id]
            },
            review2 : {
                id : review2.id,
                userId: user2.id,
                spotId: spot1.id,
                review: review2.review,
                stars: review2.stars,
                createdAt: review2.createdAt,
                updatedAt: review2.updatedAt,
                reviewImages: [reviewImage2.id]
            }
        },
        allIds : [review1.id, review2.id]
    },
    reviewImages: {
        byId : {
            reviewImage1 : {
                id : reviewImage1.id,
                reviewId: reviewImage1.reviewId,
                url: reviewImage1.url,
                createdAt: spotImage1.createdAt,
                updatedAt: spotImage1.updatedAt
            },
            reviewImage2 : {
                id : reviewImage2.id,
                reviewId: reviewImage2.id,
                url: reviewImage2.url,
                createdAt: reviewImage2.createdAt,
                updatedAt: reviewImage2.updatedAt
            }
        },
        allIds : [reviewImage1.id, reviewImage2.id]
    },
    spotImages: {
        byId : {
            spotImage1 : {
                id : spotImage1.id,
                spotId: spot1.id,
                url: spotImage1.url,
                createdAt: spotImage1.createdAt,
                updatedAt: spotImage1.updatedAt,
                preview: spotImage1.preview
            },
            spotImage2 : {
                id : spotImage2.id,
                spotId: spot2.id,
                url: spotImage2.url,
                createdAt: spotImage2.createdAt,
                updatedAt: spotImage2.updatedAt,
                preview: spotImage2.preview
            }
        },
        allIds : [spotImage1.id, spotImage2.id]
    }
}
