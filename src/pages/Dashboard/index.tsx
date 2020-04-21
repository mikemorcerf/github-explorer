import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore Github repositories</Title>

      <Form>
        <input placeholder="Type the repository's name" />
        <button type="submit">Search</button>
      </Form>

      <Repositories>
        <a href="test">
          <img
            src="https://avatars3.githubusercontent.com/u/16601136?s=460&u=cc113eafff21220b4a2ef9c77d0456b6ff6175ce&v=4"
            alt="Mike bolado"
          />
          <div>
            <strong>mikemorcerf/repository</strong>
            <p>Easy to use component in ReactJS</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="test">
          <img
            src="https://avatars3.githubusercontent.com/u/16601136?s=460&u=cc113eafff21220b4a2ef9c77d0456b6ff6175ce&v=4"
            alt="Mike bolado"
          />
          <div>
            <strong>mikemorcerf/repository</strong>
            <p>Easy to use component in ReactJS</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="test">
          <img
            src="https://avatars3.githubusercontent.com/u/16601136?s=460&u=cc113eafff21220b4a2ef9c77d0456b6ff6175ce&v=4"
            alt="Mike bolado"
          />
          <div>
            <strong>mikemorcerf/repository</strong>
            <p>Easy to use component in ReactJS</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
