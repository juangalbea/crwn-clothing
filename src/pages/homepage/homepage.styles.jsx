import styled from 'styled-components';

export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 32px 80px 56px;
  background:
    radial-gradient(circle at top left, rgba(255, 92, 138, 0.14), transparent 30%),
    radial-gradient(circle at top right, rgba(255, 184, 0, 0.12), transparent 26%),
    linear-gradient(180deg, #fffaf5 0%, #ffffff 48%);

  .home-copy {
    max-width: 760px;
    padding: 12px 4px 8px;
  }

  .eyebrow {
    display: inline-flex;
    margin-bottom: 18px;
    padding: 8px 14px;
    border-radius: 999px;
    background: #111111;
    color: #ffffff;
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.22rem;
    text-transform: uppercase;
  }

  h1 {
    margin: 0 0 14px;
    font-size: clamp(2.6rem, 5vw, 4.8rem);
    line-height: 0.96;
    letter-spacing: -0.04em;
    text-transform: uppercase;
  }

  p {
    max-width: 620px;
    margin: 0;
    color: #4d4d4d;
    font-size: 1.1rem;
    line-height: 1.7;
  }

  @media screen and (max-width: 800px) {
    padding: 24px 24px 40px;
  }
`;
