import { Helmet, HelmetData } from 'react-helmet-async';

type HeadProps = {
  readonly title?: string;
  readonly description?: string;
};

const helmetData = new HelmetData({});

export function Head({ title = '', description = '' }: HeadProps) {
  return (
    <Helmet
      helmetData={helmetData}
      title={title ? `${title} | The Magic Place` : undefined}
      defaultTitle="The Magic Place"
    >
      <meta
        name="description"
        content={description}
      />
    </Helmet>
  );
}
