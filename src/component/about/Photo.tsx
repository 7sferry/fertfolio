/************************
 * Made by [MR Ferry™]  *
 * on April 2020        *
 ************************/

import { graphql, useStaticQuery } from "gatsby";
import { IGatsbyImageData, withArtDirection } from "gatsby-plugin-image";

const getPhotoBio = (): IGatsbyImageData => {
  const { file } = useStaticQuery(graphql`
    query PhotoBio {
      file(relativePath: { eq: "ferry-headshots.png" }) {
        childImageSharp {
          original: gatsbyImageData(
            quality: 100
            placeholder: DOMINANT_COLOR
            layout: CONSTRAINED
            outputPixelDensities: [1]
            width: 200
            height: 200
          )
        }
      }
    }
  `);
  return withArtDirection(file?.childImageSharp?.original, []);
};

export default getPhotoBio;
