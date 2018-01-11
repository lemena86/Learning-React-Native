import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import Card from '../Card';
import CardSection from '../CardSection';
import Button from '../Button';

const AlbumDetail = ({ album }) => {
  // eslint-disable-next-line
  const { title, artist, thumbnail_image, image, url } = album;
  const {
    headerContentStyles,
    thumbnailStyle,
    thumbnailContainerStyle,
    headerTextStyle,
    imageStyle
  } = styles;
  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image style={thumbnailStyle} source={{ uri: thumbnail_image }} />
        </View>
        <View style={headerContentStyles}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image style={imageStyle} source={{ uri: image }} />
      </CardSection>
      <CardSection>
        <Button onPress={() => Linking.openURL(url)}>Buy Me</Button>
      </CardSection>
    </Card>
  );
};

AlbumDetail.propTypes = {
  album: PropTypes.shape({
    title: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
    thumbnail_image: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  }).isRequired
};
export default AlbumDetail;
