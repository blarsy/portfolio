import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Gallery = styled.section`
  display: flex;
  flex-wrap: nowrap;
  overflow: auto;
  margin-bottom: 2rem;
  img{
    max-height: 20rem;
    max-width: 40rem;
    margin: 0 1rem;
    border: 1px solid transparent;
    &:hover {
      border: 1px solid #ccc;
    }
  }
`

const ImageGroup = styled.section`
  display: flex;
  flex-wrap: nowrap;
  margin: 1rem 0.5rem 1rem;
  padding: 0.5rem;
  border: 1px solid #ccc;
  box-shadow: 5px 5px 2px #aaa;
`

const ProjectHeader = styled.h2`
  margin-left: 5rem;
  margin-bottom: 5rem;
  font-family: arial;
  font-size: 20pt;
  > span {
    padding-left: 2rem;
    font-family: courier;
    font-size: 15pt;
    color: #888;
  }
`

const Container = styled.section`
  margin: 4rem 4rem 0 4rem;
`

const FeatureHeader = styled.section`
  border: 1px solid #ccc;
  width: 50%;
  > div {
    margin: 0.5rem 7rem;
    h3 {
      font-family: helvetica;
      font-size: 16pt;
      margin: 0;
      display: inline-block;
    }
    p {
      margin: 0;
      color: #888;
    }
  }
`

const ProjectBox = styled.article`
  margin-bottom: 10rem;
`

const Portfolio = ({ projects }) =>
  <Container>
    {projects.map(project =>
      <ProjectBox>
        <ProjectHeader>{project.name}<span>{project.lead}</span></ProjectHeader>
        <section>
          {project.screenshots.map(screenshot =>
            <section>
              <FeatureHeader>
                <div>
                  <h3>
                    {screenshot.title}
                  </h3>
                  <p>({`${screenshot.imageGroups.length} screens`})</p>
                </div>
              </FeatureHeader>
              <Gallery>
                {screenshot.imageGroups.map(imgGroup =>
                  <ImageGroup>
                    {imgGroup.map(img =>
                      <div>
                        <img
                          key={img}
                          src={`img/${project.name.toLowerCase()}/${img}.png`}
                          alt={`A screen from ${project.name}`}
                        />
                      </div>
                    )}
                  </ImageGroup>
                )}
              </Gallery>
            </section>
          )}
        </section>
      </ProjectBox>
    )}
  </Container>

Portfolio.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      lead: PropTypes.string,
      screenshots: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string,
          imageGroups: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string))
        })
      )
    })
  )
}

export default Portfolio
