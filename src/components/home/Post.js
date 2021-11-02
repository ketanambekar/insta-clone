import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Divider } from 'react-native-elements';


const PostIcons = [{
    name: "Like",
    imageUrl: require('../../assets/heart.png')
},
{
    name: "Comment",
    imageUrl: require('../../assets/chat.png')
}, {
    name: "Share",
    imageUrl: require('../../assets/share.png')
}, {
    name: "Save",
    imageUrl: require('../../assets/save.png')
}]
const Post = ({ post }) => {
    return (
        <View style={{ marginBottom: 30 }}>
            <Divider width={1} orientation={'vertical'} />
            <PostHeader post={post} />
            <PostImage post={post} />
            <View style={{ marginHorizontal: 15, marginTop: 10 }}>
                <PostFooter post={post} />
                <Like post={post} />
                <Captions post={post} />
                <CommentSections post={post} />
                <Comments post={post} />
            </View>
        </View>
    )
}

const PostHeader = ({ post }) => {
    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
            margin: 5,
            alignItems: 'center'
        }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={{ uri: post.profile_picture }} style={styles.story} />
                <Text style={{ color: 'white', marginLeft: 5, fontWeight: '500' }}>{post.user}</Text>
            </View>

            <TouchableOpacity >
                <Text style={{ color: '#fff', alignItems: 'center', marginRight: 10, fontWeight: '900', width: '100%' }}>...</Text>
            </TouchableOpacity>
        </View>
    )
}

const PostFooter = ({ post }) => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row' }}>
                <Icon imgStyle={styles.imageFooter} imgUrl={PostIcons[0].imageUrl} />
                <Icon imgStyle={styles.imageFooter} imgUrl={PostIcons[1].imageUrl} />
                <Icon imgStyle={styles.imageFooter} imgUrl={PostIcons[2].imageUrl} />
            </View>
            <View>
                <Icon imgStyle={[styles.imageFooter, { marginRight: 0 }]} imgUrl={PostIcons[3].imageUrl} />
            </View>

        </View>
    )
}

const Icon = ({ imgStyle, imgUrl }) => {
    return (
        <TouchableOpacity>
            <Image style={imgStyle} source={imgUrl} />
        </TouchableOpacity>
    )
}

const PostImage = ({ post }) => {
    return (
        <View style={{ width: '100%', height: 450 }}>
            <Image source={{ uri: post.imageUrl }} style={{ height: '100%', resizeMode: 'cover' }} />

        </View>)
}

const Like = ({ post }) => {
    return (
        <TouchableOpacity style={{ flexDirection: 'row', marginTop: 4 }}>
            <Text style={{ color: '#fff', fontWeight: '600' }}>{post.likes.toLocaleString('en')} likes</Text>
        </TouchableOpacity>
    )
}

const Captions = ({ post }) => {
    return (
        <View style={{ marginTop: 5 }}>
            <Text style={{ color: '#fff' }}>
                <Text style={{ fontWeight: '700' }}>
                    {post.user}
                </Text>
                <Text>  {post.caption}</Text></Text>
        </View>
    )
}

const CommentSections = ({ post }) => {
    return (
        <TouchableOpacity style={{ marginTop: 5 }}>
            {!!post.comments.length && (
                <Text style={{ color: 'grey' }}>
                    View{post.comments.length > 1 ? ' all ' : ''} {post.comments.length}
                    {post.comments.length > 1 ? ' comments' : ' comment'}
                </Text>
            )}
        </TouchableOpacity>
    )
}

const Comments = ({ post }) => {
    return (
        <>
            {post.comments.map((item, index) =>
            <View style={{marginTop: 5}} key={index}>
                <Text  style={{ color: 'white' }}>
                    <Text style={{ fontWeight: '700' }}>
                        {item.user}
                    </Text>
                    <Text>  {item.comment}</Text></Text>
                    </View>
            )}

        </>
    )
}

const styles = StyleSheet.create({
    story: {
        width: 35, height: 35, borderRadius: 50, marginLeft: 6, borderWidth: 3,
        borderColor: '#ff8501'
    },
    imageFooter: {
        height: 33,
        width: 33,
        marginRight: 10
    }
})

export default Post