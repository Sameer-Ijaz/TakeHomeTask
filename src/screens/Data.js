import React, { useState, useEffect } from 'react';
import { FlatList, View, Text, ActivityIndicator } from 'react-native';
import axios from 'axios';

export default function Data() {

    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);


    const fetchData = async () => {
        setLoading(true);
        try {
            setPage(prevPage => prevPage + 1);
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`);
            setData(prevData => [...prevData, ...response.data]);

        } catch (error) {
            console.error("Error fetching data", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <FlatList
            data={data}
            renderItem={({ item }) => (
                <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
                    <Text style={{ fontWeight: 'bold' }}>{item.title}</Text>
                    <Text style={{ fontWeight: 'bold' }}>{item.id}</Text>
                    <Text>{item.body}</Text>
                </View>
            )}
            keyExtractor={item => item.id.toString()}
            onEndReached={fetchData}
            onEndReachedThreshold={0.1}
            ListFooterComponent={loading ? <ActivityIndicator size="large" color="#0000ff" /> : null}
        />
    );
};


