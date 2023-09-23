/*
title: string;
Distance: string;
AbsoluteMagnitude: string;
hazardous: string;
Diameter: string;
*/

export const processNerabyResponse = (response) => {
    let result = [];

    Object.keys(response.near_earth_objects).forEach(key => {
        const values = response.near_earth_objects[key];

        values.forEach(value => {
            const { name, close_approach_data, absolute_magnitude_h, is_potentially_hazardous_asteroid, estimated_diameter: { meters } } = value;

            result.push({
                title: name,
                distance: close_approach_data[0]?.miss_distance.kilometers,
                magnitude: absolute_magnitude_h,
                hazardous: is_potentially_hazardous_asteroid ? 'YES': 'NO',
                diameter: `${meters.estimated_diameter_min}, ${meters.estimated_diameter_max}`,
            });
        });
    });
    return result;
};